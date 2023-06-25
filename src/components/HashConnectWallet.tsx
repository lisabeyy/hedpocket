import React from 'react';
import { VenomConnect } from 'venom-connect'; 
import { HashConnect } from 'hashconnect';

type Props = {
  venomConnect: VenomConnect | undefined;
};

function HashConnectWallet({ venomConnect }: Props) {
  const login = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };
  return (
    <div>
        
        <button className="btn text-black hover:text-[#05ED9F]" onClick={login}>
          Connect wallet
        </button>
    </div>
  );
}
  
export default HashConnectWallet;