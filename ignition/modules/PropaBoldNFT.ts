import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PropaBoldNFTmodule = buildModule("PropaBoldNFTmodule", (m) => {

    const save = m.contract("PropaBoldNFT", []);

    return { save };
});

export default PropaBoldNFTmodule;