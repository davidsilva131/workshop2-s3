import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../login/Logo";
import './Search.scss'
import { Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function Search() {

    const [product, setProduct] = useState('');
    const [showProduct, setShowProduct] = useState(false);
    const [params, setParams] = useSearchParams();

    const handleSearch = () => {
        if (product !== '') {
            setParams({
                pizza: product
            })
            setShowProduct(true)
        } else {
            setParams({})
            setShowProduct(false)
        }

    }
    const handleChange = (target) => {
        setProduct(target.target.value)
    }

    return (
        <>
            <div className="search">
                <div className="search__input">
                    <input onChange={(target) => { handleChange(target) }} type="search" placeholder="Busca tu pizza favorita" />
                    <Button onClick={handleSearch}>
                        <SearchIcon />
                    </Button>
                </div>
                {
                    !showProduct ?
                        (
                            <div>
                                <Logo />
                            </div>
                        ) :
                        (
                            <div>
                                {product}
                            </div>
                        )
                }

            </div>

        </>
    )
}

export default Search;
