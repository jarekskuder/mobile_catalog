import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteBrand,
    setBrandsData,
    updateBrandName
} from "../../state/actions/brands";
import {API} from "../../api/config";
import ListItem from "../../components/ListItem";
import Spinner from "../../components/Spinner";
import Select from "../../components/Form/Select";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import handleError from "../../utils/handlers";
import {sortAtoZ, sortZtoA} from "../../utils/filters";

const Brands = () => {
    const brands = useSelector(state => state.brands.brands);
    const dispatch = useDispatch();
    const [spinner, setSpinner] = useState(true);
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [localBrands, setLocalBrands] = useState([]);
    const sortOptions = [
        {
            name: "A to Z",
            value: "1",
        },
        {
            name: "Z to A",
            value: "2",
        }
    ];

    // Check if we have data, if not, call API and get it
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('brands'));
        if (!data) {
            getBrands();
        }else{
            dispatch(setBrandsData(data.brands));
            setLocalBrands(data.brands);
            setSpinner(false);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(brands){
            setLocalBrands(brands);
        }
    }, [brands]);

    // Get brands from API
    const getBrands = () => {
        fetch(API.getBrands)
            .then(result => {
                if (!result.ok){
                    handleError(result);
                }
                return result.json();
            })
            .then((result) => {
                if(result && result.options && result.options.length > 0){
                    dispatch(setBrandsData(result.options));
                    setLocalBrands(result.options);
                }
            })
            .finally(() => setSpinner(false))
        ;
    };

    // Change name of brand and update state
    const changeName = (e, brand) => {
        const target = e.target;
        brand.displayName = target.value;
        dispatch(updateBrandName(brand));
    };

    // Change sorting of brands
    const changeSort = e => {
        const value = e.target.value;
        setSort(value);
        switch (value) {
            case "1":
                dispatch(setBrandsData(sortAtoZ(brands)));
                setLocalBrands(sortAtoZ(brands));
                break;
            case "2":
                dispatch(setBrandsData(sortZtoA(brands)));
                setLocalBrands(sortZtoA(brands));
                break;
            default:
        }
    };

    // Brand search by name. Reg expression works like MySQL "Like", case insensitive
    const searchByName = e => {
        const value = e.target.value;
        setSearch(value);
        setLocalBrands(brands.filter(obj => {
            return obj.displayName.match(new RegExp(value + ".*", "i"))
        }));
    };

    // Remove brand and update state
    const remove = (brand) => {
        dispatch(deleteBrand(brand));
    };

    return (
        <div className="container">
            <div className="functionHeader">
                <Input
                    label="Search by name"
                    type="text"
                    maxLength={20}
                    name="filter"
                    value={search}
                    onChange={searchByName}
                />
                <Select
                    label="Sort"
                    name="sort"
                    value={sort}
                    onChange={changeSort}
                    options={sortOptions}
                />
                <Button
                    type="button"
                    onClick={getBrands}
                    text="Reset data"
                />
            </div>
            {spinner && <Spinner/>}
            {((!localBrands || localBrands.length < 1) && !spinner) && <div>No brands</div>}
            <div className="items">
                {localBrands && localBrands.map((brand, index) => {
                    return (
                        <div key={index} tabIndex={index} className="brandItem">
                            <Link to={`/phones/${brand.id}`}>
                                <ListItem selector="brand" item={brand} showName={false} />
                            </Link>
                            <Input
                                type="text"
                                maxLength={20}
                                name={brand.id}
                                value={brand.displayName}
                                className="brandNameInput"
                                onChange={(e) => changeName(e, brand)}
                            />
                            <Button
                                type="button"
                                onClick={() => remove(brand)}
                                text="Delete brand"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Brands;
