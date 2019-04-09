import React, {Component} from 'react';
import Context from '../config/Context';

const openFood='https://fr.openfoodfacts.org/api/v0/produit/';
let url;



class ContextProvider extends Component {
	constructor(props){
			super(props);
			this.state={
					image: '',
					name:'',
					additives:''
			};
	}

	componentDidMount() {
		let code= this.props.result;
		this.getFood(code.codeResult.code)
	}
	
	getFood(code) {
		url=`${openFood}${code}.json`
    fetch(url)
			.then(response  =>  response.json())
      .then(response  => {
				
				this.setState({
          image:  response.product.image_front_url,
          name:		response.product.product_name,
          additives:response.product.additives_original_tags
        });
    });
	} 
	
	componentWillMount(){
		this.getFood();
	}

	render(){
		return(
			<Context.Provider value={{
							state:	this.state,
							getFood:this.getFood
			}}>
			{this.props.children}
			</Context.Provider>
		);
	}
}

export default ContextProvider;