type MinusIconProps = {
  color?: string;
  onClick?: () => void;
};

export function MinusIcon({ color, onClick }: MinusIconProps) {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={color ?? "none"}
      onClick={onClick}
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      //style="enable-background:new 0 0 330 330;"
      width="20"
      height="20"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M281.633,48.328C250.469,17.163,209.034,0,164.961,0C120.888,0,79.453,17.163,48.289,48.328
		c-64.333,64.334-64.333,169.011,0,233.345C79.453,312.837,120.888,330,164.962,330c44.073,0,85.507-17.163,116.671-48.328
		c31.165-31.164,48.328-72.599,48.328-116.672S312.798,79.492,281.633,48.328z M260.42,260.46
		C234.922,285.957,201.021,300,164.962,300c-36.06,0-69.961-14.043-95.46-39.54c-52.636-52.637-52.636-138.282,0-190.919
		C95,44.042,128.901,30,164.961,30s69.961,14.042,95.459,39.54c25.498,25.499,39.541,59.4,39.541,95.46
		S285.918,234.961,260.42,260.46z"
        />
        <path d="M254.961,150H74.962c-8.284,0-15,6.716-15,15s6.716,15,15,15h179.999c8.284,0,15-6.716,15-15S263.245,150,254.961,150z" />
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
}
