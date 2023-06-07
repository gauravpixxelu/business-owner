import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import 'smooth-scrollbar/dist/smooth-scrollbar.css';

function Scrollbar() {
  useEffect(() => {
    const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'));
    
    // Set any options you want to use
    scrollbar.setOptions({
      damping: 0.5,
      thumbMinSize: 20
    });
    
    return () => {
      scrollbar.destroy();
    };
  }, []);

 
}

