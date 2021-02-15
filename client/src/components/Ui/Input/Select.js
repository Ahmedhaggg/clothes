
import 
import Select from 'react-select'
let colourOptions = [
    {label: "red", value: "red"},
    {label: "green", value: "green"},
    {label: "black", value: "black"},
    {label: "green", value: "green"},


]
const CustomClearText = () => 'clear all';
const ClearIndicator = props => {
  const {
    children = <CustomClearText />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
    >
      <div style={{ padding: '0px 5px' }}>{children}</div>
    </div>
  );
};
const ClearIndicatorStyles = (base, state) => ({
    ...base,
    cursor: 'pointer',
    color: state.isFocused ? 'blue' : 'black',
  });