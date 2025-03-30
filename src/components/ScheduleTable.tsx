
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ScheduleItem = {
  day: string;
  startTime: string;
  endTime: string;
  room?: string;
};

type ScheduleTableProps = {
  category: string;
  title: string;
  schedules: ScheduleItem[];
};

const ScheduleTable = ({ category, title, schedules }: ScheduleTableProps) => {
  return (
    <div className="bg-teatro-500 rounded-md overflow-hidden shadow-md">
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-800 mb-3">{category}</p>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-full text-sm">
            <thead>
              <tr className="border-b border-teatro-600">
                <th className="text-left py-2 pr-2">Dia</th>
                <th className="text-left py-2 px-2">Horário</th>
                {schedules.some(s => s.room) && (
                  <th className="text-left py-2 pl-2">Sala</th>
                )}
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr 
                  key={index} 
                  className="border-b border-teatro-400 last:border-0"
                >
                  <td className="py-2 pr-2">{schedule.day}</td>
                  <td className="py-2 px-2">
                    {schedule.startTime} - {schedule.endTime}
                  </td>
                  {schedules.some(s => s.room) && (
                    <td className="py-2 pl-2">{schedule.room || '-'}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const ScheduleTableGroup = () => {
  const [activeCategory, setActiveCategory] = useState("teatro");
  
  const teatroSchedules = [
    { day: "Segunda", startTime: "18:00", endTime: "20:00", room: "Sala 1" },
    { day: "Quarta", startTime: "18:00", endTime: "20:00", room: "Sala 1" },
    { day: "Sábado", startTime: "10:00", endTime: "12:00", room: "Sala 2" },
  ];
  
  const tvCinemaSchedules = [
    { day: "Terça", startTime: "19:00", endTime: "21:00", room: "Sala 3" },
    { day: "Quinta", startTime: "19:00", endTime: "21:00", room: "Sala 3" },
  ];
  
  const cantoSchedules = [
    { day: "Segunda", startTime: "14:00", endTime: "16:00", room: "Sala 4" },
    { day: "Quinta", startTime: "14:00", endTime: "16:00", room: "Sala 4" },
  ];
  
  const instrumentosSchedules = [
    { day: "Terça", startTime: "14:00", endTime: "16:00", room: "Sala 5" },
    { day: "Sexta", startTime: "14:00", endTime: "16:00", room: "Sala 5" },
  ];
  
  return (
    <Tabs defaultValue="teatro" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid grid-cols-4 mb-6">
        <TabsTrigger value="teatro" onClick={() => setActiveCategory("teatro")}>
          Teatro
        </TabsTrigger>
        <TabsTrigger value="tv-cinema" onClick={() => setActiveCategory("tv-cinema")}>
          TV & Cinema
        </TabsTrigger>
        <TabsTrigger value="canto" onClick={() => setActiveCategory("canto")}>
          Canto
        </TabsTrigger>
        <TabsTrigger value="instrumentos" onClick={() => setActiveCategory("instrumentos")}>
          Instrumentos
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="teatro" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScheduleTable 
            category="Adulto"
            title="Teatro para adultos"
            schedules={teatroSchedules}
          />
          <ScheduleTable 
            category="Adolescente"
            title="Teatro para adolescentes"
            schedules={[
              { day: "Terça", startTime: "16:00", endTime: "18:00", room: "Sala 1" },
              { day: "Quinta", startTime: "16:00", endTime: "18:00", room: "Sala 1" },
            ]}
          />
        </div>
      </TabsContent>
      
      <TabsContent value="tv-cinema" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScheduleTable 
            category="Atuação para câmera"
            title="Técnicas de TV e Cinema"
            schedules={tvCinemaSchedules}
          />
          <ScheduleTable 
            category="Direção"
            title="Direção para TV e Cinema"
            schedules={[
              { day: "Sábado", startTime: "14:00", endTime: "18:00", room: "Sala 3" },
            ]}
          />
        </div>
      </TabsContent>
      
      <TabsContent value="canto" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScheduleTable 
            category="Canto lírico"
            title="Técnica vocal"
            schedules={cantoSchedules}
          />
          <ScheduleTable 
            category="Coral"
            title="Canto em grupo"
            schedules={[
              { day: "Quarta", startTime: "19:00", endTime: "21:00", room: "Sala 4" },
            ]}
          />
        </div>
      </TabsContent>
      
      <TabsContent value="instrumentos" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScheduleTable 
            category="Piano"
            title="Piano para iniciantes"
            schedules={instrumentosSchedules}
          />
          <ScheduleTable 
            category="Violão"
            title="Violão para iniciantes"
            schedules={[
              { day: "Segunda", startTime: "16:00", endTime: "18:00", room: "Sala 6" },
              { day: "Quarta", startTime: "16:00", endTime: "18:00", room: "Sala 6" },
            ]}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ScheduleTable;
