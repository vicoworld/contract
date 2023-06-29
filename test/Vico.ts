import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Vico', function () {
  async function deployVicoFixture() {
    const [owner, otherAccount, otherAccount2] = await ethers.getSigners();

    const Vico = await ethers.getContractFactory('VICO');
    const vico = await Vico.deploy();

    return { vico, owner, otherAccount, otherAccount2 };
  }

  describe('Minting', function () {
    it('User with MINTER_ROLE should be able to mint VICO token', async function () {
      const { vico, owner } = await loadFixture(deployVicoFixture);

      const mintTx = await vico.mintTo(owner.address, 10000);
      await mintTx.wait();

      const vicoBalance = await vico.balanceOf(owner.address);

      expect(vicoBalance.toNumber()).to.be.equal(10000);
    });

    it('User without MINTER_ROLE should be able to mint VICO token', async function () {
      const { vico, owner, otherAccount } = await loadFixture(deployVicoFixture);

      await expect(vico.connect(otherAccount).mintTo(owner.address, 10000)).to.be.reverted;
    });
  });
});
