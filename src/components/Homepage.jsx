import React from 'react';
import milify from 'millify';
import {Typography,Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom';
import { useGetCryptosQuery} from '../services/CryptoApi';
import {Cryptocurrencies,News} from '../components';
import Loader from './Loader';
const {Title}= Typography;

const Homepage = () => {
    const {data,isFetching}=useGetCryptosQuery(10);
    const globalDataStats= data?.data?.stats;
   if(isFetching) return <Loader />;
    return (
      <>
      <Title level={2} className='Heading'>Global Crypto Statistics</Title>
      <Row>
          <Col span={12} ><Statistic title='Total Crypto Currencies' value={globalDataStats.total}></Statistic></Col>
          <Col span={12} ><Statistic title='Total Exchange' value={milify(globalDataStats.totalExchanges)}></Statistic></Col>
          <Col span={12} ><Statistic title='Total Market Cap' value={milify(globalDataStats.totalMarketCap)}></Statistic></Col>
          <Col span={12} ><Statistic title='Total 24h Volume' value={milify(globalDataStats.total24hVolume)}></Statistic></Col>
          <Col span={12} ><Statistic title='Total Markets' value={milify(globalDataStats.totalMarkets)}></Statistic></Col>
      </Row>
      <div className='home-heading-container'>
            <Title level={2} className="home-title">Top 10 crypto currencies</Title>
            <Title level={4} className="show-more"><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={4} className="show-more"><Link to='/news'>Show More</Link> </Title>
      </div>
      <News simplified/>
      </>  
    );
}

export default Homepage;