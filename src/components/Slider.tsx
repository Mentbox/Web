import ReactSlider from "react-slider";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

function Slider({ value = 0, onChange }: Props) {
  return (
    <ReactSlider
      defaultValue={[value]}
      className="h-[6px] rounded-[2px] bg-gray-100"
      onChange={(value) => onChange(value as unknown as number)}
      renderThumb={(props) => (
        <div
          {...props}
          className="w-[12px] h-[12px] bg-blue-300 rounded-full -translate-y-[3px]"
        />
      )}
      renderTrack={(props, state) => (
        <div
          {...props}
          className={`${
            state.index === 0 ? "bg-blue-75" : "bg-gray-100"
          } h-[6px] rounded-[2px]`}
        />
      )}
    />
  );
}

export default Slider;
