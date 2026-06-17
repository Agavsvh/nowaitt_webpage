"use client";

type Screen = "home" | "search" | "business" | "booking" | "payment" | "tracking" | "profile";

interface Props {
  screen: Screen;
  className?: string;
}

const screenColors: Record<Screen, { bg: string; accent: string; label: string }> = {
  home:     { bg: "#f0f7ff", accent: "#2563eb", label: "Home" },
  search:   { bg: "#faf5ff", accent: "#7c3aed", label: "Search" },
  business: { bg: "#f0fdf4", accent: "#16a34a", label: "Business" },
  booking:  { bg: "#fffbeb", accent: "#d97706", label: "Book Slot" },
  payment:  { bg: "#fef2f2", accent: "#dc2626", label: "Payment" },
  tracking: { bg: "#eff6ff", accent: "#2563eb", label: "Tracking" },
  profile:  { bg: "#f5f3ff", accent: "#7c3aed", label: "Profile" },
};

export default function PhoneMockup({ screen, className = "" }: Props) {
  const { bg, accent } = screenColors[screen];

  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <svg className="phone-svg" viewBox="0 0 280 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer shell */}
        <rect x="2" y="2" width="276" height="556" rx="44" fill="#1e293b" />
        {/* Inner bezel */}
        <rect x="8" y="8" width="264" height="544" rx="40" fill="#0f172a" />
        {/* Screen area */}
        <rect x="14" y="14" width="252" height="532" rx="36" fill={bg} />

        {/* Dynamic Island / Notch */}
        <rect x="100" y="22" width="80" height="28" rx="14" fill="#0f172a" />

        {/* Status bar */}
        <text x="28" y="42" fontSize="10" fill="#64748b" fontFamily="system-ui">9:41</text>
        <g transform="translate(210, 30)">
          {/* Signal bars */}
          <rect x="0" y="6" width="3" height="4" rx="1" fill="#64748b"/>
          <rect x="4" y="4" width="3" height="6" rx="1" fill="#64748b"/>
          <rect x="8" y="2" width="3" height="8" rx="1" fill="#64748b"/>
          <rect x="12" y="0" width="3" height="10" rx="1" fill="#64748b"/>
          {/* WiFi */}
          <path d="M20 8 Q24 4 28 8" stroke="#64748b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M22 10 Q24 8 26 10" stroke="#64748b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="24" cy="12" r="1" fill="#64748b"/>
          {/* Battery */}
          <rect x="33" y="2" width="16" height="8" rx="2" stroke="#64748b" strokeWidth="1.2" fill="none"/>
          <rect x="35" y="3.5" width="10" height="5" rx="1" fill="#64748b"/>
          <rect x="49" y="4.5" width="2" height="3" rx="1" fill="#64748b"/>
        </g>

        {/* Screen content based on screen type */}
        {screen === "home" && <HomeScreenWithImage accent={accent} />}
        {screen === "search" && <SearchScreen accent={accent} />}
        {screen === "business" && <BusinessScreen accent={accent} />}
        {screen === "booking" && <BookingScreen accent={accent} />}
        {screen === "payment" && <PaymentScreen accent={accent} />}
        {screen === "tracking" && <TrackingScreen accent={accent} />}
        {screen === "profile" && <ProfileScreen accent={accent} />}

        {/* Bottom home indicator */}
        <rect x="110" y="534" width="60" height="4" rx="2" fill="#94a3b8" />

        {/* Side buttons */}
        <rect x="-2" y="120" width="4" height="32" rx="2" fill="#334155"/>
        <rect x="-2" y="165" width="4" height="50" rx="2" fill="#334155"/>
        <rect x="-2" y="225" width="4" height="50" rx="2" fill="#334155"/>
        <rect x="278" y="150" width="4" height="70" rx="2" fill="#334155"/>
      </svg>
    </div>
  );
}

function HomeScreenWithImage(_: { accent: string }) {
  return (
    <g>
      <clipPath id="appScreenClip">
        <rect x="14" y="58" width="252" height="474" rx="0"/>
      </clipPath>
      <image
        href="/app-screenshot.jpg"
        x="14" y="58"
        width="252" height="474"
        preserveAspectRatio="xMidYMin slice"
        clipPath="url(#appScreenClip)"
        aria-label="Nowaitt app home screen"
      >
        <title>Nowaitt app home screen</title>
      </image>
      {/* Bottom nav overlay */}
      <rect x="14" y="488" width="252" height="58" fill="white" opacity="0.95"/>
      <rect x="14" y="487" width="252" height="1" fill="#f1f5f9"/>
      {["🏠","🎫","🕐","👤"].map((icon, i) => (
        <text key={i} x={42 + i * 63} y="522" fontSize="18" textAnchor="middle">{icon}</text>
      ))}
    </g>
  );
}


function SearchScreen({ accent }: { accent: string }) {
  return (
    <g>
      <text x="28" y="80" fontSize="18" fontWeight="700" fill="#0f172a" fontFamily="system-ui">Find Services</text>
      <rect x="24" y="90" width="232" height="36" rx="12" fill="white" stroke={accent} strokeWidth="1.5"/>
      <text x="44" y="113" fontSize="11" fill="#0f172a" fontFamily="system-ui">Salons near me</text>
      <text x="24" y="148" fontSize="11" fontWeight="600" fill="#64748b" fontFamily="system-ui">15 results found</text>
      {[
        { y: 156, name: "GlamZone Studio", slots: "3 slots", rating: "4.9" },
        { y: 214, name: "The Cut Factory", slots: "6 slots", rating: "4.7" },
        { y: 272, name: "Hair Republic", slots: "1 slot", rating: "4.8" },
        { y: 330, name: "Style & Grace", slots: "4 slots", rating: "4.6" },
      ].map(({ y, name, slots, rating }) => (
        <g key={name}>
          <rect x="24" y={y} width="232" height="52" rx="14" fill="white" stroke="#f1f5f9" strokeWidth="1"/>
          <rect x="34" y={y + 10} width="32" height="32" rx="10" fill="#dbeafe"/>
          <text x="50" y={y + 30} fontSize="16" textAnchor="middle">✂️</text>
          <text x="78" y={y + 24} fontSize="11" fontWeight="600" fill="#0f172a" fontFamily="system-ui">{name}</text>
          <text x="78" y={y + 38} fontSize="9" fill="#64748b" fontFamily="system-ui">⭐ {rating} • {slots} available</text>
          <rect x="192" y={y + 16} width="54" height="20" rx="8" fill={accent}/>
          <text x="219" y={y + 30} fontSize="9" fill="white" fontWeight="600" fontFamily="system-ui" textAnchor="middle">Book Now</text>
        </g>
      ))}
    </g>
  );
}

function BusinessScreen({ accent }: { accent: string }) {
  return (
    <g>
      <rect x="14" y="58" width="252" height="120" rx="0" fill="#dbeafe"/>
      <text x="140" y="130" fontSize="32" textAnchor="middle">✂️</text>
      <text x="28" y="196" fontSize="16" fontWeight="700" fill="#0f172a" fontFamily="system-ui">GlamZone Studio</text>
      <text x="28" y="212" fontSize="10" fill="#64748b" fontFamily="system-ui">⭐ 4.9 (248 reviews) • 2.1 km away</text>
      <rect x="28" y="220" width="70" height="20" rx="8" fill="#dcfce7"/>
      <text x="63" y="234" fontSize="9" fill="#16a34a" fontWeight="600" fontFamily="system-ui" textAnchor="middle">● Open Now</text>
      <text x="28" y="258" fontSize="12" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Services</text>
      {[
        { y: 266, service: "Hair Cut", price: "₹199", time: "30 min" },
        { y: 296, service: "Hair Color", price: "₹799", time: "90 min" },
        { y: 326, service: "Beard Trim", price: "₹99", time: "15 min" },
      ].map(({ y, service, price, time }) => (
        <g key={service}>
          <rect x="24" y={y} width="232" height="26" rx="8" fill="#f8fafc"/>
          <text x="36" y={y + 17} fontSize="10" fill="#0f172a" fontFamily="system-ui">{service}</text>
          <text x="160" y={y + 17} fontSize="9" fill="#64748b" fontFamily="system-ui">{time}</text>
          <text x="220" y={y + 17} fontSize="10" fontWeight="700" fill={accent} fontFamily="system-ui">{price}</text>
        </g>
      ))}
      <rect x="24" y="480" width="232" height="44" rx="14" fill={accent}/>
      <text x="140" y="506" fontSize="13" fill="white" fontWeight="700" fontFamily="system-ui" textAnchor="middle">Book Appointment</text>
    </g>
  );
}

function BookingScreen({ accent }: { accent: string }) {
  return (
    <g>
      <text x="28" y="80" fontSize="16" fontWeight="700" fill="#0f172a" fontFamily="system-ui">Join Queue</text>
      <text x="28" y="96" fontSize="10" fill="#475569" fontFamily="system-ui">Hair Cut • GlamZone Studio</text>

      {/* Live queue status card */}
      <rect x="24" y="110" width="232" height="72" rx="16" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
      <text x="40" y="133" fontSize="11" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Live Queue Status</text>
      <rect x="40" y="140" width="54" height="16" rx="6" fill="#dcfce7"/>
      <text x="67" y="151" fontSize="8" fill="#16a34a" fontWeight="700" fontFamily="system-ui" textAnchor="middle">● OPEN</text>
      <text x="40" y="173" fontSize="10" fill="#475569" fontFamily="system-ui">3 people ahead  ·  Est. wait ~12 min</text>

      {/* Queue position options */}
      <text x="28" y="206" fontSize="12" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Queue Details</text>
      {[
        { y: 214, label: "Current Queue Length", val: "3 people", highlight: false },
        { y: 252, label: "Estimated Wait Time", val: "~12 min", highlight: false },
        { y: 290, label: "Your Position", val: "#4 (next join)", highlight: true },
        { y: 328, label: "Service Duration", val: "~30 min", highlight: false },
      ].map(({ y, label, val, highlight }) => (
        <g key={label}>
          <rect x="24" y={y} width="232" height="32" rx="10"
            fill={highlight ? "#eff6ff" : "white"}
            stroke={highlight ? "#dbeafe" : "#f1f5f9"} strokeWidth="1"/>
          <text x="36" y={y + 21} fontSize="10" fill="#475569" fontFamily="system-ui">{label}</text>
          <text x="240" y={y + 21} fontSize="10" fontWeight="700"
            fill={highlight ? accent : "#0f172a"} fontFamily="system-ui" textAnchor="end">{val}</text>
        </g>
      ))}

      <rect x="24" y="480" width="232" height="44" rx="14" fill={accent}/>
      <text x="140" y="506" fontSize="13" fill="white" fontWeight="700" fontFamily="system-ui" textAnchor="middle">Join Queue Now</text>
    </g>
  );
}

function PaymentScreen({ accent }: { accent: string }) {
  return (
    <g>
      <text x="28" y="80" fontSize="16" fontWeight="700" fill="#0f172a" fontFamily="system-ui">Payment</text>
      <rect x="24" y="92" width="232" height="88" rx="16" fill="linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)"/>
      <rect x="24" y="92" width="232" height="88" rx="16" fill={accent} opacity="0.85"/>
      <text x="40" y="118" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">Hair Cut • GlamZone Studio</text>
      <text x="40" y="140" fontSize="22" fontWeight="700" fill="white" fontFamily="system-ui">₹199</text>
      <text x="40" y="158" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">Today, 3:30 PM</text>
      <text x="28" y="202" fontSize="12" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Pay with</text>
      {[
        { y: 210, label: "UPI", sub: "Google Pay, PhonePe", icon: "📱", sel: true },
        { y: 252, label: "Card", sub: "Credit / Debit", icon: "💳", sel: false },
        { y: 294, label: "Wallet", sub: "Nowaitt Wallet", icon: "👜", sel: false },
      ].map(({ y, label, sub, icon, sel }) => (
        <g key={label}>
          <rect x="24" y={y} width="232" height="38" rx="12" fill={sel ? "#eff6ff" : "white"} stroke={sel ? "#2563eb" : "#f1f5f9"} strokeWidth="1.2"/>
          <text x="42" y={y + 23} fontSize="16">{icon}</text>
          <text x="64" y={y + 20} fontSize="11" fontWeight="600" fill="#0f172a" fontFamily="system-ui">{label}</text>
          <text x="64" y={y + 33} fontSize="9" fill="#64748b" fontFamily="system-ui">{sub}</text>
          {sel && <circle cx="244" cy={y + 19} r="6" fill="#2563eb"/>}
        </g>
      ))}
      <rect x="24" y="480" width="232" height="44" rx="14" fill="#22c55e"/>
      <text x="140" y="506" fontSize="13" fill="white" fontWeight="700" fontFamily="system-ui" textAnchor="middle">Pay ₹199 Securely</text>
    </g>
  );
}

function TrackingScreen({ accent }: { accent: string }) {
  return (
    <g>
      <text x="28" y="80" fontSize="16" fontWeight="700" fill="#0f172a" fontFamily="system-ui">Queue Status</text>
      <rect x="24" y="92" width="232" height="76" rx="16" fill="#eff6ff" stroke="#dbeafe" strokeWidth="1"/>
      <text x="40" y="116" fontSize="13" fontWeight="600" fill="#0f172a" fontFamily="system-ui">GlamZone Studio</text>
      <text x="40" y="132" fontSize="10" fill="#475569" fontFamily="system-ui">Hair Cut · You're #2 in queue</text>
      <rect x="40" y="140" width="80" height="18" rx="6" fill="#dcfce7"/>
      <text x="80" y="153" fontSize="9" fill="#16a34a" fontWeight="600" fontFamily="system-ui" textAnchor="middle">Est. 6 min wait ✓</text>

      {/* Timeline */}
      <text x="28" y="192" fontSize="12" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Live Queue Progress</text>
      <line x1="50" y1="208" x2="50" y2="380" stroke="#e2e8f0" strokeWidth="2"/>
      {[
        { y: 208, label: "Joined Queue Remotely", sub: "2:15 PM · from home", done: true },
        { y: 265, label: "You're #2 in Queue", sub: "Est. wait ~6 min", done: true },
        { y: 322, label: "Reminder Call Sent", sub: "Heads up — almost your turn", done: false },
        { y: 379, label: "Walk In Now", sub: "You're next · head over", done: false },
      ].map(({ y, label, sub, done }) => (
        <g key={label}>
          <circle cx="50" cy={y} r="8" fill={done ? accent : "white"} stroke={done ? accent : "#e2e8f0"} strokeWidth="2"/>
          {done && <path d={`M46 ${y} L49 ${y+3} L55 ${y-3}`} stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>}
          <text x="68" y={y - 2} fontSize="11" fontWeight="600" fill={done ? "#0f172a" : "#94a3b8"} fontFamily="system-ui">{label}</text>
          <text x="68" y={y + 13} fontSize="9" fill="#475569" fontFamily="system-ui">{sub}</text>
        </g>
      ))}

      <rect x="24" y="480" width="232" height="44" rx="14" fill={accent}/>
      <text x="140" y="506" fontSize="13" fill="white" fontWeight="700" fontFamily="system-ui" textAnchor="middle">I'm On My Way</text>
    </g>
  );
}

function ProfileScreen({ accent }: { accent: string }) {
  return (
    <g>
      <rect x="14" y="58" width="252" height="100" fill="#f5f3ff"/>
      <circle cx="140" cy="100" r="30" fill="#ddd6fe" stroke="white" strokeWidth="3"/>
      <text x="140" y="110" fontSize="28" textAnchor="middle">👤</text>
      <text x="140" y="176" fontSize="16" fontWeight="700" fill="#0f172a" fontFamily="system-ui" textAnchor="middle">Rahul Sharma</text>
      <text x="140" y="192" fontSize="10" fill="#64748b" fontFamily="system-ui" textAnchor="middle">rahul.sharma@gmail.com</text>

      <text x="28" y="220" fontSize="12" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Your Stats</text>
      {[
        { x: 24, val: "23", label: "Bookings" },
        { x: 104, val: "5h", label: "Time Saved" },
        { x: 184, val: "4.9", label: "Your Rating" },
      ].map(({ x, val, label }) => (
        <g key={label}>
          <rect x={x} y="228" width="72" height="50" rx="14" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="1"/>
          <text x={x + 36} y="252" fontSize="16" fontWeight="700" fill={accent} fontFamily="system-ui" textAnchor="middle">{val}</text>
          <text x={x + 36} y="268" fontSize="9" fill="#64748b" fontFamily="system-ui" textAnchor="middle">{label}</text>
        </g>
      ))}

      <text x="28" y="302" fontSize="12" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Recent Bookings</text>
      {[
        { y: 310, name: "GlamZone Studio", date: "Jun 14", status: "Done" },
        { y: 348, name: "CityMed Clinic", date: "Jun 10", status: "Done" },
        { y: 386, name: "AutoFix Garage", date: "Jun 5", status: "Done" },
      ].map(({ y, name, date, status }) => (
        <g key={name}>
          <rect x="24" y={y} width="232" height="34" rx="10" fill="white" stroke="#f1f5f9" strokeWidth="1"/>
          <text x="36" y={y + 16} fontSize="11" fontWeight="600" fill="#0f172a" fontFamily="system-ui">{name}</text>
          <text x="36" y={y + 29} fontSize="9" fill="#64748b" fontFamily="system-ui">{date}</text>
          <rect x="186" y={y + 8} width="58" height="18" rx="6" fill="#dcfce7"/>
          <text x="215" y={y + 20} fontSize="9" fill="#16a34a" fontWeight="600" fontFamily="system-ui" textAnchor="middle">✓ {status}</text>
        </g>
      ))}
    </g>
  );
}
