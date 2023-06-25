import { useEffect, useState } from 'react'
import Stats from '../components/stats';
import { useParams,useNavigate } from 'react-router-dom';




interface WalletProps {
  address: string;
  userAddress?: string;
  onSetSearchAddress?(address: string): void;
}



export default function Wallet({ address, userAddress, onSetSearchAddress }) {


  const [userCurrAddress, setUserCurrAddress] = useState<string>('');

  console.log('address', address);
  const params = useParams();

  console.log('params', params);


  useEffect(() => {

  console.log('userAddress', userAddress);
    setUserCurrAddress(address);
    address=userAddress;
   
  }, [userAddress]);
  
  if(params && params.address) {
    
    console.log('params', params);
    address = params.address;
    onSetSearchAddress(params.address);
  }

  return (
    <main className="py-10 bg-white h-full overflow-y-scroll">
    <div className="px-4 sm:px-6 lg:px-8">

      <Stats address={address} userAddress={userCurrAddress} />
    </div>
  </main>
  )
}
