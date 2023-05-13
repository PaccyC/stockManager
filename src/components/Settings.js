import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MenuDropDown from './MenuDropDown';
import { BsSun } from 'react-icons/bs';
import { WiMoonAltWaningGibbous6 } from 'react-icons/wi';
import { IoMdDesktop } from 'react-icons/io';
import Footer from './Footer';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

function Settings() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'system');
  const [checkedLanguage, setCheckedLanguage] = useState(cookies.get('i18next') || 'en');

  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const options = [
    {
      icon: BsSun,
      text: 'light'
    },
    {
      icon: WiMoonAltWaningGibbous6,
      text: 'dark'
    },
    {
      icon: IoMdDesktop,
      text: 'system'
    }
  ];

  function onWindowMatch() {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && darkQuery.matches)
    ) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }

  useEffect(() => {
    onWindowMatch();

    switch (mode) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;

      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;

      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [mode]);

  darkQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  });

  // languages
  const languages=[
    {
        code:"en",
        name:"English",
        country_code:"gb"
    },
    {
        code:"es",
        name:"Spanish",
        country_code:"es"
    },
    {
        code:"fr",
        name:"Français",
        country_code:"gb"
    },
    {
        code:"it",
        name:"Italian",
        country_code:"it"
    },
    {
        code:"pt",
        name:"Portuguese",
        country_code:"pt"
    },
    {
        code:"ru",
        name:"Russian",
        country_code:"ru"
    },
    {
        code:"zh-CN",
        name:"Chinese (Simplified)",
        country_code:"zh-CN"
    },
    {
        code:"zh-TW",
        name:"Chinese (Traditional)",
        country_code:"zh-TW"
    },
    {
        code:"ja",
        name:"Japanese",
        country_code:"ja"
    },
    {
        code:"ko",
        name:"Korean",
        country_code:"ko"
    },
    {
        code:"ar",
        name:"Arabic",
        country_code:"ar"
    },
    {
        code:"hi",
        name:"Hindi",
        country_code:"in"
    },
    {
        code:"sv",
        name:"Swedish",
        country_code:"sv"
    },
    {
        code:"no",
        name:"Norwegian",
        country_code:"no"
    },
    {
        code:"da",
        name:"Danish",
        country_code:"da"
    },
    {
        code:"el",
        name:"Greek",
        country_code:"el"
    },
    {
        code:"tr",
        name:"Turkish",
        country_code:"tr"
    },
    {
        code:"af",
        name:"Afrikaans",
        country_code:"af"
    },
    {
        code:"sq",
        name:"Albanian",
        country_code:"sq"
    },
    {
        code:"rw",
        name:"Kinyarwanda",
        country_code:"rw"
    },
    {
        code:"ku",
        name:"Kurdish",
        country_code:"ku"
    },
    {
        code:"lo",
        name:"Lao",
        country_code:"lo"
    },
    {
        code:"ne",
        name:"Nepali",
        country_code:"ne"
    },
    {
        code:"sk",
        name:"Slovask",
        country_code:"sk"
    },
    {
        code:"sl",
        name:"Slovenian",
        country_code:"sl"
    },
    {
        code:"sw",
        name:"Swahili",
        country_code:"tz"
    },
    {
        code:"en",
        name:"English",
    country_code:"gb"
    },
    {
        code:"en",
        name:"English",
        country_code:"gb"
    },
    {
        code:"en",
        name:"English",
        country_code:"gb"
    },
    {
        code:"en",
        name:"English",
        country_code:"gb"
    },
    {
        code:"en",
        name:"English",
        country_code:"gb"
    },
    {
        code:"en",
        name:"English",
        country_code:"gb"
    },
    {
        code:"en",
        name:"English",
        country_code:"gb"
    },

]

  const { t } = useTranslation();
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setCheckedLanguage(code);
  };

  return (
    <main>
      <Navbar />
      <MenuDropDown />
      <div className={`absolute bg-white w-[1235px] h-[70vh] left-72 top-36  dark:text-gray dark:bg-slate-900`}>
        <h2 className="text-2xl font-semibold text-left pl-6">{t('settings.language')}</h2>

        <div className="flex flex-row justify-around">
          <div className="top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100">
            {options.map((opt) => (
              <button
                key={opt.text}
                className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                  mode === opt.text && 'text-sky-600'
                }`}
                onClick={() => setMode(opt.text)}
              >
                {React.createElement(opt.icon)}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Language settings */}
      <div className='absolute left-72 top-72 flex flex-col'>
        <h2 className='text-2xl font-semibold text-left pl-6 pb-6'>Language</h2>
        <div className='flex flex-row w-full justify-between space-x-9'>
          {languages?.map(({ code, country_code, name }) => (
            <div key={country_code}>
              <input
                type='radio'
                onClick={() => handleLanguageChange(code)}
                checked={checkedLanguage === code}
              />
              <label
                className={`${country_code}`}
                style={{ opacity: currentLanguageCode === code ? 0.5 : 1 }}
              >
                {name}
              </label>
            </div>
          ))}
    
        </div>
        </div>
      </main>
  )
}

export default  Settings;