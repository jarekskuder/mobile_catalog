import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {API} from "../../api/config";
import ListItem from "../../components/ListItem";
import Spinner from "../../components/Spinner";
import Modal from "../../components/Modal";
import handleError from "../../utils/handlers";

const Phones = (props) => {
    const [phones, setPhones] = useState();
    const [selectedPhone, setSelectedPhone] = useState(false);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        if(!phones){
            getPhones();
        }
        // eslint-disable-next-line
    }, []);

    // Get phones from API
    const getPhones = () => {
        fetch(API.getPhones + props.match.params.id)
            .then(result => {
                if (!result.ok){
                    handleError(result);
                }
                return result.json();
            })
            .then((result) => {
                console.log(result);
                if(result && result.length > 0){
                    setPhones(result);
                }
            })
            .finally(() => setSpinner(false))
        ;
    };

    return (
        <div className="container">
            <div className="navigationBar">
                <Link to="/brands">
                    &lt; Back to brands
                </Link>
            </div>
            {selectedPhone && <Modal closeModal={setSelectedPhone} data={selectedPhone} />}
            {spinner && <Spinner/>}
            {((!phones || phones.length < 1) && !spinner) && <div>No phones</div>}
            <div className="items">
                {phones && phones.map((phone, index) => {
                    return (
                        <ListItem
                            tabIndex={index}
                            openModal={setSelectedPhone}
                            selector="phone"
                            key={index}
                            item={phone}
                            showName
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Phones;
