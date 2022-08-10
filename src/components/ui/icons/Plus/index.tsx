type PlusIconProps = {
  color?: string;
  onClick?: () => void;
};

export const PlusIcon = ({ color, onClick }: PlusIconProps) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      fill={color ?? "none"}
      onClick={onClick}
      y="0px"
      viewBox="0 0 20 20"
      //style="enable-background:new 0 0 330 330;"
      width="20"
      height="20"
      //style={{ enableBackground: "new 0 0 432.785 432.785" }}
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M147.103,432.785h138.581c6.902,0,12.5-5.596,12.5-12.5V298.182h122.102c6.904,0,12.5-5.597,12.5-12.5V147.104
		c0-6.903-5.596-12.5-12.5-12.5H298.184V12.5c0-6.903-5.598-12.5-12.5-12.5H147.103c-6.904,0-12.5,5.597-12.5,12.5v122.104H12.5
		c-6.904,0-12.5,5.597-12.5,12.5v138.578c0,6.903,5.596,12.5,12.5,12.5h122.103v122.104
		C134.603,427.189,140.2,432.785,147.103,432.785z M25,273.182V159.604h122.103c6.903,0,12.5-5.597,12.5-12.5V25h113.581v122.104
		c0,6.903,5.596,12.5,12.5,12.5h122.102v113.578H285.684c-6.904,0-12.5,5.598-12.5,12.5v122.104H159.603V285.682
		c0-6.902-5.597-12.5-12.5-12.5H25z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
