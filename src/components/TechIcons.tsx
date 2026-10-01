export type TechBrandInfo = {
  name: string
  color: string
  category: string
  level: string
  iconKey: string
  description: string
}

export function TechIcon({ iconKey, className, size = 32 }: { iconKey: string; className?: string; size?: number }) {
  const cls = className ?? 'w-8 h-8'

  switch (iconKey.toLowerCase()) {
    case 'react':
    case 'reactnative':
    case 'react native':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="11.5" fill="#61DAFB" />
          <ellipse cx="64" cy="64" rx="50" ry="18.5" stroke="#61DAFB" strokeWidth="7" fill="none" />
          <ellipse cx="64" cy="64" rx="50" ry="18.5" stroke="#61DAFB" strokeWidth="7" fill="none" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="50" ry="18.5" stroke="#61DAFB" strokeWidth="7" fill="none" transform="rotate(120 64 64)" />
        </svg>
      )

    case 'expo':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#000000" />
          <path d="M64 24L20 96h22l22-38 22 38h22L64 24z" fill="#FFFFFF" />
        </svg>
      )

    case 'fastapi':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#059669" />
          <path d="M68 20L36 72h24l-8 36 40-52H68l8-36z" fill="#FFFFFF" />
        </svg>
      )

    case 'gemini':
    case 'google gemini':
    case 'google gemini ai':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#1E1B4B" />
          <path d="M64 16C64 42.5 42.5 64 16 64c26.5 0 48 21.5 48 48 0-26.5 21.5-48 48-48-26.5 0-48-21.5-48-48z" fill="url(#gemini-grad)" />
          <defs>
            <linearGradient id="gemini-grad" x1="16" y1="16" x2="112" y2="112" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#818CF8" />
              <stop offset="1" stopColor="#C084FC" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'nextjs':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#000000" />
          <path d="M45 28v72M72 28l32 72M72 64h28" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'typescript':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path d="M68 95c2.5 4 6 6.5 12 6.5 6 0 10-3 10-7.5 0-5-4-7-11.5-10.5-10.5-5-15.5-9.5-15.5-18.5 0-10.5 8.5-18.5 21-18.5 9.5 0 15 4 19 11l-8 6c-2.5-4.5-5.5-6.5-11-6.5-5.5 0-9 3-9 7 0 4.5 3.5 6.5 11.5 10 11 5 15.5 10 15.5 19 0 11.5-9 19-23 19-12 0-18.5-5.5-22.5-13l8-6.5zM42 47.5h27v11H55.5V103h-13.5V58.5H29v-11h13z" fill="#FFFFFF" />
        </svg>
      )

    case 'nodejs':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M64 10L12 37v54l52 27 52-27V37z" fill="#339933" />
          <path d="M64 10v108M12 37l52 27M116 37L64 64M12 91l52-27M116 91L64 64" stroke="#2E7D32" strokeWidth="1.5" opacity="0.3" />
        </svg>
      )

    case 'nestjs':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M64 12L12 40v48l52 28 52-28V40L64 12z" fill="#E0234E" />
          <path d="M64 36l32 18-32 18-32-18 32-18zm-28 32l28 16v32l-28-16V68zm56 0v32l-28 16V84l28-16z" fill="#FFFFFF" />
        </svg>
      )

    case 'postgresql':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path
            d="M96 36c-8-16-24-24-40-20-12 3-20 11-24 23-3 8-2 16 2 24 4 7 10 12 18 14l-2 20c-1 4 1 7 5 8 3 1 6 0 8-3l14-22c10-2 18-8 22-16 5-10 4-20-3-28z"
            fill="#336791"
          />
          <ellipse cx="48" cy="52" rx="6" ry="8" fill="#FFFFFF" />
          <ellipse cx="80" cy="52" rx="6" ry="8" fill="#FFFFFF" />
        </svg>
      )

    case 'mongodb':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M64 12c-4 0-7 3-7 7v82c0 4 3 7 7 7s7-3 7-7V19c0-4-3-7-7-7z" fill="#47A248" />
          <path
            d="M64 12c-16 8-28 24-28 42 0 14 8 26 20 32v15c0 4 3 7 8 7V86c12-6 20-18 20-32 0-18-12-34-20-42z"
            fill="#47A248"
          />
        </svg>
      )

    case 'prisma':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M76 16L28 68l8 44 52-24L76 16z" fill="#2D3748" />
          <path d="M76 16L52 88l36-12L76 16z" fill="#5A67D8" />
          <path d="M28 68l24 20 36-12-52-8z" fill="#4C51BF" />
        </svg>
      )

    case 'docker':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <g fill="#2496ED">
            <rect x="26" y="54" width="14" height="12" rx="1.5" />
            <rect x="44" y="54" width="14" height="12" rx="1.5" />
            <rect x="62" y="54" width="14" height="12" rx="1.5" />
            <rect x="80" y="54" width="14" height="12" rx="1.5" />
            <rect x="44" y="38" width="14" height="12" rx="1.5" />
            <rect x="62" y="38" width="14" height="12" rx="1.5" />
            <rect x="80" y="38" width="14" height="12" rx="1.5" />
            <rect x="62" y="22" width="14" height="12" rx="1.5" />
          </g>
          <path
            d="M16 76c4 18 22 28 48 28s44-10 48-28c-10-6-24-6-34 2-12-8-28-8-40 0-10-8-20-8-22-2z"
            fill="#2496ED"
          />
        </svg>
      )

    case 'aws':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#232F3E" />
          <path
            d="M24 80c20 14 50 14 80 0M100 88l8 6-10 3"
            stroke="#FF9900"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 38l-8 24h6l2-6h10l2 6h6l-8-24h-10zm4 6l3 10h-6l3-10z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'python':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M62 8c-18 0-30 2-36 7-6 5-6 12-6 27v10h42v4H20v28c0 15 5 24 15 24h10V96c0-11 9-19 20-19h26V64c0-15 0-22-6-27-6-5-18-7-33-7zm-10 14a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" fill="#3776AB" />
          <path d="M66 120c18 0 30-2 36-7 6-5 6-12 6-27V76H66v-4h42V44c0-15-5-24-15-24H83v12c0 11-9 19-20 19H37v13c0 15 0 22 6 27 6 5 18 7 33 7zm10-14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="#FFD43B" />
        </svg>
      )

    case 'opencv':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="36" r="22" stroke="#FF0000" strokeWidth="14" />
          <circle cx="38" cy="82" r="22" stroke="#00FF00" strokeWidth="14" />
          <circle cx="90" cy="82" r="22" stroke="#0000FF" strokeWidth="14" />
        </svg>
      )

    case 'raspberrypi':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="54" fill="#C51A4A" />
          <path d="M44 32c4 8 12 12 20 12s16-4 20-12" stroke="#75B927" strokeWidth="8" strokeLinecap="round" />
        </svg>
      )

    case 'tailwindcss':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path
            d="M32 44c12-16 24-16 36-8s16 16 28 8c-8 12-20 16-32 8s-20-16-32-8zm0 32c12-16 24-16 36-8s16 16 28 8c-8 12-20 16-32 8s-20-16-32-8z"
            fill="#06B6D4"
          />
        </svg>
      )

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#F7DF1E" />
          <path d="M67 98c3.5 2 7 3.5 11.5 3.5 6 0 9.5-3 9.5-7 0-4.5-3.5-6.5-9.5-9-9-3.5-15.5-7.5-15.5-17.5 0-10.5 8.5-17.5 21-17.5 8.5 0 14 3 18 8l-6 6.5c-3-3.5-6.5-5.5-12-5.5-5 0-8 2.5-8 5.5 0 4 3.5 5.5 9.5 8 9.5 4 16 7.5 16 18.5 0 11.5-9 18.5-22.5 18.5-10 0-16.5-4-21-10.5l6.5-6.5zM42 98.5c4 2 8 3.5 12 3.5 7 0 10.5-3.5 10.5-12.5V51.5h-12v37c0 4.5-1.5 6-5 6-2 0-4-.5-5.5-1.5l0 5.5z" fill="#000000" />
        </svg>
      )

    case 'github':
    case 'git':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#181717" />
          <path d="M64 20C39.7 20 20 39.7 20 64c0 19.4 12.6 35.9 30.1 41.7 2.2.4 3-.9 3-2.1v-7.5c-12.3 2.7-14.9-5.9-14.9-5.9-2-5.1-4.9-6.5-4.9-6.5-4-2.7.3-2.7.3-2.7 4.5.3 6.8 4.6 6.8 4.6 3.9 6.7 10.3 4.8 12.9 3.7.4-2.8 1.5-4.8 2.8-5.9-9.8-1.1-20.2-4.9-20.2-21.9 0-4.8 1.7-8.8 4.6-11.9-.5-1.1-2-5.6.4-11.7 0 0 3.7-1.2 12.2 4.5 3.5-1 7.3-1.5 11-1.5s7.5.5 11 1.5c8.5-5.7 12.2-4.5 12.2-4.5 2.4 6.1.9 10.6.4 11.7 2.9 3.1 4.6 7.1 4.6 11.9 0 17.1-10.4 20.8-20.3 21.9 1.6 1.4 3 4.1 3 8.3v12.3c0 1.2.8 2.5 3 2.1C95.4 99.9 108 83.4 108 64c0-24.3-19.7-44-44-44z" fill="#FFFFFF" />
        </svg>
      )

    case 'express':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#000000" />
          <path d="M20 48L108 48M28 64L100 64M20 80L108 80" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <circle cx="100" cy="48" r="4" fill="#FFFFFF" />
        </svg>
      )

    case 'socketio':
    case 'socket.io':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#010101" />
          <path d="M72 26L44 70h18l-10 32 30-46H64l8-30z" fill="#FFFFFF" />
        </svg>
      )

    case 'redux':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#764ABC" />
          <path
            d="M64 32c10 0 18 8 18 18 0-10 8-18 18-18-10 0-18 8-18 18s-8 18-18 18c10 0 18 8 18 18 0-10 8-18 18-18-10 0-18 8-18 18s-8 18-18 18c10 0 18 8 18 18 0-10-8-18-18-18-10 0-18-8-18-18s8-18 18-18c-10 0-18-8-18-18 0 10-8 18-18 18 10 0 18-8 18-18s8-18 18-18z"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </svg>
      )

    case 'firebase':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M64 14L42 46l14-28 8 28z" fill="#FFA000" />
          <path d="M42 46L26 76l16-30z" fill="#F57C00" />
          <path d="M26 76l38 22L42 46z" fill="#FFCA28" />
          <path d="M98 76L78 38l-14 36 34 24z" fill="#FFA000" />
          <path d="M64 74l-38 24 38-24z" fill="#F57C00" />
          <circle cx="78" cy="38" r="6" fill="#FFA000" />
        </svg>
      )

    case 'vercel':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M64 26l46 76H18z" fill="currentColor" />
        </svg>
      )

    case 'arduino':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#00979D" />
          <g stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round">
            <circle cx="44" cy="64" r="17" />
            <circle cx="84" cy="64" r="17" />
            <path d="M36 64h16" />
            <path d="M76 64h16" />
            <path d="M84 56v16" />
          </g>
        </svg>
      )

    case 'java':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M48 34c-5-6 5-9 0-16M64 34c-5-6 5-9 0-16M80 34c-5-6 5-9 0-16" stroke="#5382A1" strokeWidth="6" strokeLinecap="round" />
          <path d="M36 48h56v16c0 15-11 26-26 26h-4c-15 0-26-11-26-26V48z" fill="#ED8B00" />
          <path d="M92 54h5a14 14 0 0 1 0 28h-6" stroke="#ED8B00" strokeWidth="7" strokeLinecap="round" />
          <path d="M28 92h72c0 8-16 13-36 13s-36-5-36-13z" fill="#5382A1" />
        </svg>
      )

    case 'cpp':
    case 'c++':
    case 'c / c++':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M64 10l46 27v54l-46 27-46-27V37z" fill="#00599C" />
          <text
            x="64"
            y="80"
            textAnchor="middle"
            fontSize="38"
            fontWeight="700"
            fontFamily="Arial, Helvetica, sans-serif"
            fill="#FFFFFF"
          >
            C++
          </text>
        </svg>
      )

    case 'sql':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M26 34v60c0 8 17 14 38 14s38-6 38-14V34" fill="#0E7490" />
          <ellipse cx="64" cy="34" rx="38" ry="14" fill="#67E8F9" />
          <path d="M26 62c0 7.7 17 14 38 14s38-6.3 38-14" stroke="#67E8F9" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M26 88c0 7.7 17 14 38 14s38-6.3 38-14" stroke="#22D3EE" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      )

    case 'html5':
    case 'html':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M24 18h80l-7.6 84L64 110 31.6 102z" fill="#E34F26" />
          <text
            x="64"
            y="82"
            textAnchor="middle"
            fontSize="44"
            fontWeight="700"
            fontFamily="Arial, Helvetica, sans-serif"
            fill="#FFFFFF"
          >
            5
          </text>
        </svg>
      )

    case 'css3':
    case 'css':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M24 18h80l-7.6 84L64 110 31.6 102z" fill="#1572B6" />
          <text
            x="64"
            y="82"
            textAnchor="middle"
            fontSize="44"
            fontWeight="700"
            fontFamily="Arial, Helvetica, sans-serif"
            fill="#FFFFFF"
          >
            3
          </text>
        </svg>
      )

    case 'vscode':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M95 10L38 64l-18-14L8 56l30 28L8 112l12 6 18-14 57 54 28-14V24L95 10z" fill="#0078D4" />
          <path d="M95 10v34L52 64l43 20v34L38 64z" fill="#005BA1" opacity="0.8" />
        </svg>
      )

    case 'postman':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#FF6C37" />
          <path d="M64 30v68M30 64h68" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
          <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
        </svg>
      )

    case 'figma':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="44" cy="36" r="16" fill="#F24E1E" />
          <circle cx="44" cy="64" r="16" fill="#A259FF" />
          <circle cx="44" cy="92" r="16" fill="#0ACF83" />
          <circle cx="84" cy="36" r="16" fill="#FF7262" />
          <circle cx="84" cy="64" r="16" fill="#1ABCFE" />
        </svg>
      )

    case 'npm':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" fill="#CB3837" />
          <path d="M20 40v48h88V40H20zm8 8h16v32H36V56h-8V48zm24 0h24v32H60V56h-8v24h-8V48zm32 0h16v32H92V56h-8V48z" fill="#FFFFFF" />
        </svg>
      )

    case 'githubactions':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#2088FF" />
          <path d="M64 24l12 28 30 4-22 20 6 30-26-14-26 14 6-30-22-20 30-4z" fill="#FFFFFF" />
        </svg>
      )

    case 'cloudinary':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#3448C5" />
          <path d="M36 54c8-12 20-16 32-12s20 16 24 28" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none" />
          <circle cx="36" cy="72" r="8" fill="#FFFFFF" />
          <circle cx="64" cy="56" r="8" fill="#FFFFFF" />
          <circle cx="92" cy="72" r="8" fill="#FFFFFF" />
        </svg>
      )

    case 'recharts':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#8884d8" />
          <path d="M20 90L40 70L60 80L80 50L100 60L108 40" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="40" cy="70" r="5" fill="#FFFFFF" />
          <circle cx="60" cy="80" r="5" fill="#FFFFFF" />
          <circle cx="80" cy="50" r="5" fill="#FFFFFF" />
        </svg>
      )

    case 'restapi':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#009688" />
          <circle cx="40" cy="40" r="12" stroke="#FFFFFF" strokeWidth="4" fill="none" />
          <circle cx="88" cy="40" r="12" stroke="#FFFFFF" strokeWidth="4" fill="none" />
          <circle cx="40" cy="88" r="12" stroke="#FFFFFF" strokeWidth="4" fill="none" />
          <circle cx="88" cy="88" r="12" stroke="#FFFFFF" strokeWidth="4" fill="none" />
          <path d="M52 40h24M40 52v24M88 52v24M52 88h24" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    case 'mongodbatlas':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="58" fill="#00ED64" />
          <path d="M64 12c-16 8-28 24-28 42 0 14 8 26 20 32v15c0 4 3 7 8 7V86c12-6 20-18 20-32 0-18-12-34-20-42z" fill="#001E2B" />
        </svg>
      )

    case 'typeorm':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#FE0902" />
          <rect x="36" y="44" width="56" height="40" rx="4" stroke="#FFFFFF" strokeWidth="6" fill="none" />
          <circle cx="52" cy="64" r="6" fill="#FFFFFF" />
          <circle cx="76" cy="64" r="6" fill="#FFFFFF" />
        </svg>
      )

    case 'jwt':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#000000" />
          <circle cx="40" cy="64" r="12" stroke="#D63AFF" strokeWidth="4" fill="none" />
          <circle cx="88" cy="64" r="12" stroke="#00B9F1" strokeWidth="4" fill="none" />
          <path d="M52 64h24" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )

    case 'shield':
    case 'security':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <path d="M64 14L24 34v28c0 28 18 46 40 52 22-6 40-24 40-52V34L64 14z" fill="#4CAF50" />
          <path d="M52 64l10 10 20-20" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )

    case 'lock':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect x="36" y="60" width="56" height="44" rx="8" fill="#FF9800" />
          <path d="M46 60V48c0-10 8-18 18-18s18 8 18 18v12" stroke="#FF9800" strokeWidth="10" strokeLinecap="round" fill="none" />
          <circle cx="64" cy="82" r="8" fill="#FFFFFF" />
        </svg>
      )

    case 'key':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <circle cx="44" cy="64" r="24" fill="#FFC107" />
          <rect x="64" y="58" width="40" height="12" rx="6" fill="#FFC107" />
          <circle cx="44" cy="64" r="8" fill="#FFFFFF" />
          <rect x="88" y="50" width="8" height="12" rx="4" fill="#FFC107" />
          <rect x="96" y="54" width="8" height="8" rx="4" fill="#FFC107" />
        </svg>
      )

    case 'mail':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect x="20" y="36" width="88" height="56" rx="8" fill="#EA4335" />
          <path d="M20 36l44 32 44-32" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'pygame':
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#3776AB" />
          <circle cx="48" cy="52" r="16" stroke="#FFD43B" strokeWidth="6" fill="none" />
          <rect x="68" y="48" width="28" height="24" rx="4" fill="#FFD43B" />
          <path d="M64 84h28v8H64z" fill="#FFD43B" />
        </svg>
      )

    default:
      return (
        <svg width={size} height={size} className={cls} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="24" fill="#4F46E5" />
          <path d="M38 64l18 18 34-34" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}
