import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            filtro:"",
        }
        this.filtrar = this.filtrar.bind(this)
    }


    //this.props.products => data
    filtrar(filtro){
        console.log('filtrar')
        this.setState({filtro: filtro})
    }
    render() {
        
        return (
            <div>
                <h1>IRONSTORE</h1>
                <SearchBar callbackFunction={this.filtrar}/>
                <ProductTable products={this.props.products} filtro={this.state.filtro} />
            </div>
        )
    }
}


