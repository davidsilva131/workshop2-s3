import React, { useContext, useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import './Search.scss'
import { Button, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { PizzasContext } from "../../routes/Router";
import { getPizzas } from "../../services/getApiInfo";

function Search() {
  const [product, setProduct] = useState('');
  const [showProduct, setShowProduct] = useState(false);
  const [params, setParams] = useSearchParams();
  const { setPizzas } = useContext(PizzasContext)
  const [load, setLoad] = useState(false)
  const [dataFiltered, setDataFiltered] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getPizzasInfo()
  }, []);

  const handleSearch = () => {
    if (product !== '') {
      setParams({
        pizza: product
      })
      pizzasFilter(product)
      setShowProduct(true)
    } else {
      setParams({})
      setShowProduct(false)
    }

  }
  const handleChange = (target) => {
    setProduct(target.target.value)
    setDataFiltered([])
  }

  const { pizzas } = useContext(PizzasContext)

  const pizzasFilter = (product) => {
    for (let i = 0; i < pizzas.length; i++) {
      let tempFilter = dataFiltered;
      if (pizzas[i].name.includes(product.toUpperCase()) === true) {
        tempFilter.push(pizzas[i])
        setDataFiltered(tempFilter)
      }
    }
  }

  const getPizzasInfo = async () => {
    const [response] = await Promise.all([getPizzas()])
    setPizzas(response)
    setLoad(true)
  }

  const handleClickCard = (name) => {
    const tempName = name.toLowerCase();
    navigate(`/details/${tempName}`)
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
              <div className="search__container">
                <div className="logo">
                  <img src="https://imgs.search.brave.com/hEGGV0ikghdlBgLt7hxj1Tt9CDIkZDrN07uI7_-sBG8/rs:fit:856:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDI2MDAxLnBu/Zw" alt="pizza logo" />
                  <h3>Busca la pizza que más te gusta</h3>
                </div>
              </div>
            ) :
            (
              load ? (
                <div className="search__container">
                  {
                    dataFiltered.length ?
                      (
                        dataFiltered.map((pizza, index) =>
                          <Card key={index} sx={{ width: 345, display: 'flex' }}>
                            <CardActionArea onClick={() => { handleClickCard(pizza.name) }}>
                              <CardMedia
                                component="img"
                                height="140"
                                image={pizza.image}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {pizza.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {pizza.description}
                                </Typography>
                                <Chip label={pizza.price} sx={{ backgroundColor: '#FE144C', color: 'white' }} />
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        )
                      ) :
                      (
                        <div className="logo">
                          <img src="https://imgs.search.brave.com/hEGGV0ikghdlBgLt7hxj1Tt9CDIkZDrN07uI7_-sBG8/rs:fit:856:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDI2MDAxLnBu/Zw" alt="pizza logo" />
                          <h3>Busca la pizza que más te gusta</h3>
                        </div>
                      )
                  }
                </div>
              ) :
                (<div>Cargando</div>)
            )
        }
      </div>
    </>
  )
}
export default Search;
