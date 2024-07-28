import Soobshestvo from "./Soobshestvo";

const SoobshestvoList = ({ data }: { data: any }) => {
  const devkg = data?.[0]?.devkg || [];
  const facebook = data?.[0]?.facebook || [];

  return (
    <div className="community--telegram">
      <h1></h1>
      <div className="community--telegram__blocks">
        {devkg.map((item: { label: string; value: string }, index: number) => (
          <Soobshestvo key={index} label={item.label} />
        ))}

        {facebook.map(
          (item: { label: string; value: string }, index: number) => (
            <Soobshestvo key={index} label={item.label} />
          )
        )}
      </div>
    </div>
  );
};

export default SoobshestvoList;
