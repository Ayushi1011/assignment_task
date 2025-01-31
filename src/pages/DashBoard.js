import Card from "../components/Cards";
import userIcon from "../assests/topBar-icons/profile.svg"
import welcomeBg from "../assests/welcome-card/Group 37232.svg"

function Dashboard() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-sm flex items-center gap-4 w-full">
  {/* Avatar Image */}
  <img src={userIcon} alt="User Avatar" className="w-10 h-10 rounded-full" />
  
  {/* Text Content */}
  <p className="text-sm">
    Welcome to <span className="text-blue-600 font-semibold">1TAP</span>, Zaheer! 
    Select a package to access our full range of services.
  </p>

  {/* Background Design Image */}
  <img 
    src={welcomeBg} 
    alt="Background Design" 
    className="absolute right-0 top-0 h-full opacity-50 rounded-lg"
  />
</div>


      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 rounded-xl mt-4">
        <Card
          title="Business Elite Package"
          description="Premium business support with company setup, compliance, accounting, and payroll solutions."
          price="7,628"
          tag="All Inclusive Solution"
          popular={true} // ✅ Blue border for popular
          large={true} 
        />
        <Card
          title="Incorporation Package"
          description="Effortless business setup with all-inclusive incorporation services."
          price="770"
          frequency="one time"
        
        />
        <Card
          title="Founders Starter Package"
          description="Kickstart your business with hassle-free company registration and compliance."
          price="2,885"
          tag="Great for Startup"
          large={true}
        />
        <Card
          title="Personalized Package"
          description="Design your own package with customized services for your needs."
        />
      </div>
    </div>
  );
}

export default Dashboard;
