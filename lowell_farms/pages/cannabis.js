/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { getPageApi, getPageByType } from '../api';
import CannabisPage from '../components/Cannabis';

export default class BlogPost extends Component {
  static async getInitialProps() {
    // Query the Prismic API with the ID of the page
    const pageId = 'XJQ79BEAADCUl60m';
    const response = await getPageApi(pageId);

    const productsResponse = await getPageByType('product');

    // Query the Prismic API with the ID of the page
    const deliverySectionId = 'XXax2RMAACEAK00p';
    const deliverySectionResponse = await getPageApi(deliverySectionId);

    const stockistsId = 'XJbmbhEAAPHUozLk';
    const stockistsResponse = await getPageApi(stockistsId);

    return {
      page: response,
      products: productsResponse,
      stockists: stockistsResponse,
      deliverySectionContent: deliverySectionResponse,
    };
  }

  render() {
    const {
      page,
      newsletter,
      quotes,
      products,
      zipCodes,
      stockists,
      deliverySectionContent,
    } = this.props;
    const { data } = page;

    const cannabisDeliveryZones = zipCodes.cannabis_delivery_zones.map(
      zipCodeItem => zipCodeItem.zip_code
    );

    return (
      <CannabisPage
        pageData={data}
        newsletterData={newsletter}
        quotesData={quotes}
        products={products}
        deliveryZipCodes={cannabisDeliveryZones}
        zipCodeData={zipCodes}
        stockists={stockists.data}
        deliverySectionData={deliverySectionContent.data}
      />
    );
  }
}
