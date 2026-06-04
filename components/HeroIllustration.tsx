export function HeroIllustration() {
  return (
    <div className="mx-auto w-full max-w-md lg:max-w-lg" aria-hidden="true">
      <svg
        viewBox="0 0 440 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <rect
          x="24"
          y="20"
          width="392"
          height="340"
          rx="16"
          fill="#F8FAFC"
          stroke="#E2E8F0"
        />
        <rect x="44" y="44" width="150" height="88" rx="10" fill="#fff" stroke="#E2E8F0" />
        <text x="58" y="68" fill="#64748B" fontSize="10">
          Biomarkers
        </text>
        <rect x="58" y="78" width="70" height="6" rx="3" fill="#14B8A6" opacity="0.35" />
        <rect x="58" y="90" width="95" height="6" rx="3" fill="#14B8A6" opacity="0.55" />
        <rect x="58" y="102" width="80" height="6" rx="3" fill="#14B8A6" />
        <rect x="210" y="44" width="186" height="88" rx="10" fill="#fff" stroke="#E2E8F0" />
        <text x="224" y="68" fill="#64748B" fontSize="10">
          Health Metrics
        </text>
        <circle cx="280" cy="98" r="24" stroke="#E2E8F0" strokeWidth="5" fill="none" />
        <circle
          cx="280"
          cy="98"
          r="24"
          stroke="#15803D"
          strokeWidth="5"
          strokeDasharray="95 55"
          strokeLinecap="round"
          fill="none"
          transform="rotate(-90 280 98)"
        />
        <text x="268" y="103" fill="#0F172A" fontSize="13" fontWeight="600">
          87%
        </text>
        <rect x="44" y="150" width="352" height="110" rx="10" fill="#fff" stroke="#E2E8F0" />
        <text x="58" y="174" fill="#0F172A" fontSize="11" fontWeight="600">
          Doctor Consultation
        </text>
        <rect x="58" y="188" width="140" height="7" rx="3" fill="#E2E8F0" />
        <rect x="58" y="202" width="220" height="6" rx="3" fill="#E2E8F0" />
        <rect x="58" y="216" width="180" height="6" rx="3" fill="#E2E8F0" />
        <rect x="44" y="278" width="100" height="44" rx="8" fill="#F0FDF4" stroke="#BBF7D0" />
        <text x="58" y="300" fill="#15803D" fontSize="9" fontWeight="600">
          Glucose
        </text>
        <text x="58" y="314" fill="#0F172A" fontSize="12" fontWeight="700">
          Optimal
        </text>
        <rect x="158" y="278" width="100" height="44" rx="8" fill="#F0FDFA" stroke="#99F6E4" />
        <text x="172" y="300" fill="#14B8A6" fontSize="9" fontWeight="600">
          Energy
        </text>
        <text x="172" y="314" fill="#0F172A" fontSize="12" fontWeight="700">
          Improved
        </text>
        <rect x="272" y="278" width="124" height="44" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
        <text x="286" y="300" fill="#64748B" fontSize="9" fontWeight="600">
          Wellness
        </text>
        <text x="286" y="314" fill="#0F172A" fontSize="12" fontWeight="700">
          On Track
        </text>
      </svg>
    </div>
  );
}
