import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import MainPage from './MainPage';
export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className='font-semibold'>
    <div className='flex justify-between mb-4'>
      <div className='dark:text-white light:text-black text-3xl underline decoration-blue-700 decoration-4 md:underline-offset-11'>
        Sports
        </div>
      <div>
        <div className="right:0">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-18 rounded-md border-purple-400 border-2 p-2"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.svg" alt="logo" height="30px" width="40px" />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-18 rounded-md border-purple-400 border-2 p-2 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.svg" alt="logo" height="30px" width="40px" />
            </button>
          )}
        </div>
      </div>
     </div>
     <MainPage currentTheme={currentTheme} />
    </div>
  );
}
