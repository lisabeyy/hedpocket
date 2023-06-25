

import React, { useState, useEffect, useRef } from 'react';
import {
  XMarkIcon,
  WalletIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import  HedPocket  from '../assets/V-symbol.svg';
import { useNavigate } from "react-router-dom";





interface SearchAccountProps {
  onResultClick?(address: string): void;
  address?: string;
}
export default function SearchAccount({onResultClick, address}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [addressSelected, setAddressSelected] = useState('');
  const [addressDisplayed, setAddressDisplayed] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNoResultMsg, setShowNoResultMsg] = useState(false);
  const [results, setResults] = useState<any>(null);
  const autocompleteRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    setAddressDisplayed(address)
  }, []);



  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    setAddressDisplayed(term);
    setAddressSelected(term);
    setLoading(false);
    setShowNoResultMsg(false);
    setResults([]);
    navigate('/wallet/' + term);
    onResultClick(term);
  };

  const handleCloseResults = () => {
    navigate('/wallet/');
    setSearchTerm('');
    setAddressDisplayed('');
    setAddressSelected('');
    setResults([]);
    setShowNoResultMsg(false);
    setLoading(false);
  };

  const handleClickOutside = (event) => {
    if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
      setLoading(false);
      setShowNoResultMsg(false);
      setResults([]);
    }
  };

  useEffect(() => {
    if (addressSelected) {
      setAddressDisplayed(addressSelected)
      navigate('/wallet/' + addressSelected);
    }
  
  }, [addressSelected]);

 


  return (
    <div ref={autocompleteRef} className='container mx-auto mt-4 text-black'>
      <div className='relative'>
        <input
          type="text"
          value={addressDisplayed ? addressDisplayed : searchTerm}
          onChange={handleSearch}
          placeholder="Search for an account"
          className="px-4 py-2 text-gray-800 rounded-lg border border-gray-300 focus:outline-none"
        />
        {(searchTerm || addressDisplayed) && (
          <button
            onClick={handleCloseResults}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Clear search
            <XMarkIcon className="ml-1 h-4 w-4 inline" />
          </button>
        )}


      </div>

   


     
    
      
    </div>
  );
};

