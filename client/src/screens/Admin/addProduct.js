import React , {components} from 'react'
import Layout from '../../components/AdminLayout'
import Input from '../../components/Ui/Input/index'
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
const AddProduct = () => {
    const setProductData = () => {

    }
      
    return (
        <Layout>
            <section className="offset-1 col-10">
                <h4 className="h2 text-violet text-center pb-3">Add Product</h4>
                <form>
                    <Input type="text" placeholder="name" onchange={setProductData}/>
                    <Input type="text" placeholder="category" onchange={setProductData}/>
                    <Input type="number" placeholder="discount" onchange={setProductData}/>
                    <Input type="text" placeholder="product name" onchange={setProductData}/>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ ClearIndicator }}
                        styles={{ clearIndicator: ClearIndicatorStyles }}
                        defaultValue={[colourOptions[4], colourOptions[5]]}
                        isMulti
                        options={colourOptions}
                        />
                </form>
            </section>
        </Layout>
    )
}

export default AddProduct