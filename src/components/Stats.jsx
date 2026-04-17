import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { useAppContext } from '../context/AppContext';

const COLORS = ['#1f5b48', '#7c3aed', '#39a96b'];

const Stats = () => {
  const { statsData } = useAppContext();

  return (
    <div className="bg-[#f6f8fb] min-h-screen p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Friendship Analytics
        </h1>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-6">
            By Interaction Type
          </h2>

          <div className="w-full h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statsData}
                  cx="50%"
                  cy="45%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={6}
                  dataKey="value"
                  stroke="none"
                >
                  {statsData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Legend verticalAlign="bottom" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;