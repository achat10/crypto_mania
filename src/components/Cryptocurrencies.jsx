import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Input,Card, Row, Col} from 'antd';
import milify from 'millify';
import Loader from './Loader';

import {useGetCryptosQuery} from '../services/CryptoApi';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10: 100;
    const{data:CryptoList,isFetching}=useGetCryptosQuery(count);
    const[cryptos,setCryptos]=useState([]);
    const [searchTerm, setsearchTerm] = useState("");
    useEffect(()=>{
        setCryptos(CryptoList?.data?.coins);
        const filteredData=CryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData);
    },[searchTerm,CryptoList]);

    if(isFetching) return <Loader />;

    return (
        <>
        {!simplified && (
                  <div className="search-crypto">
                        <Input placeholder='Search Cryptocurrency' onChange={(e)=>setsearchTerm(e.target.value)} />
                    </div>
        )}
        <Row gutter={[32,32]} className='crypto-card-container'>
            {cryptos.map((currency)=>(
                  <Col xs={24} sm={12} md={6} lg={6} key={currency.id} className='crypto-card'>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.rank}.${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} />} hoverable>
                                    <p>Price:{milify(currency.price)}</p>
                                    <p>Market Cap: {milify(currency.marketCap)}</p>
                                    <p>Daily Change: {milify(currency.change)}%</p>
                            </Card>
                        </Link>
                  </Col>
               ))
            }
        </Row>
      </>
    )
}

export default Cryptocurrencies;