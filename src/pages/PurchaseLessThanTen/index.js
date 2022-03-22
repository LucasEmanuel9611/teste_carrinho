import React from "react";
import api from "../../services/api";
import Modal from "react-modal";
import { StyledContainer, ListArea, MyHeader, PurchaseArea } from "./styles.js";
import { AiOutlineCheckCircle } from "react-icons/ai";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
   
export default function PurchaseLessThanTen() {
  const navigate = useNavigate()

  const [doces, setDoces] = React.useState({
    value: 657,
    items: [
      {
        uniqueId: "6EA48CF66F6349648018C322C5560FA8",
        id: "16701615",
        productId: "317",
        productRefId: null,
        refId: null,
        ean: "223311",
        name: "Trufa BENDITO CACAU 55% CACAU 30 G",
        skuName: "30 G",
        modalType: null,
        parentItemIndex: null,
        parentAssemblyBinding: null,
        assemblies: [],
        priceValidUntil: "2020-12-01T02:30:00Z",
        tax: 0,
        price: 303,
        listPrice: 303,
        manualPrice: null,
        sellingPrice: 273,
        rewardValue: 0,
        isGift: false,
        additionalInfo: {
          brandName: "Codeby",
          brandId: "2000004",
          offeringInfo: null,
          offeringType: null,
          offeringTypeId: null,
        },
        preSaleDate: null,
        productCategoryIds: "/29/",
        productCategories: { 29: "trufas" },
        quantity: 1,
        seller: "1",
        sellerChain: ["1"],
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000",
        detailUrl: "/trufa-bendito-cacau-55-/p",
        components: [],
        bundleItems: [],
        attachments: [],
        attachmentOfferings: [],
        offerings: [],
        priceTags: [
          {
            name: "discount@price-6f7f6403-f49b-4e24-936e-bbdba265e959#246461c4-7dcc-43c1-ba10-bae715ddd480",
            value: -30,
            rawValue: -0.3,
            isPercentual: false,
            identifier: "6f7f6403-f49b-4e24-936e-bbdba265e959",
          },
        ],
        availability: "available",
        measurementUnit: "un",
        unitMultiplier: 1,
        manufacturerCode: null,
      },
      {
        uniqueId: "33DEE4CA67A14A4D914C6FFCE698281F",
        id: "16701612",
        productId: "314",
        productRefId: null,
        refId: null,
        ean: "0123456789123",
        name: "TRUFA MORANGO",
        skuName: "TRUFA MORANGO",
        modalType: null,
        parentItemIndex: null,
        parentAssemblyBinding: null,
        assemblies: [],
        priceValidUntil: "2020-12-01T02:30:00Z",
        tax: 0,
        price: 123,
        listPrice: 123,
        manualPrice: null,
        sellingPrice: 111,
        rewardValue: 0,
        isGift: false,
        additionalInfo: {
          brandName: "Codeby",
          brandId: "2000004",
          offeringInfo: null,
          offeringType: null,
          offeringTypeId: null,
        },
        preSaleDate: null,
        productCategoryIds: "/29/",
        productCategories: { 29: "trufas" },
        quantity: 1,
        seller: "1",
        sellerChain: ["1"],
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000",
        detailUrl: "/trufa-morango/p",
        components: [],
        bundleItems: [],
        attachments: [],
        attachmentOfferings: [],
        offerings: [],
        priceTags: [
          {
            name: "discount@price-6f7f6403-f49b-4e24-936e-bbdba265e959#246461c4-7dcc-43c1-ba10-bae715ddd480",
            value: -12,
            rawValue: -0.12,
            isPercentual: false,
            identifier: "6f7f6403-f49b-4e24-936e-bbdba265e959",
          },
        ],
        availability: "available",
        measurementUnit: "un",
        unitMultiplier: 1,
        manufacturerCode: null,
      },
      {
        uniqueId: "BF99659671134B10BD20343AE9ECF12F",
        id: "16701610",
        productId: "312",
        productRefId: null,
        refId: null,
        ean: "223311",
        name: "TRUFA TRADICIONAL 30 G",
        skuName: "30 G",
        modalType: null,
        parentItemIndex: null,
        parentAssemblyBinding: null,
        assemblies: [],
        priceValidUntil: "2020-12-01T02:30:00Z",
        tax: 0,
        price: 303,
        listPrice: 303,
        manualPrice: null,
        sellingPrice: 273,
        rewardValue: 0,
        isGift: false,
        additionalInfo: {
          brandName: "Codeby",
          brandId: "2000004",
          offeringInfo: null,
          offeringType: null,
          offeringTypeId: null,
        },
        preSaleDate: null,
        productCategoryIds: "/29/",
        productCategories: { 29: "trufas" },
        quantity: 1,
        seller: "1",
        sellerChain: ["1"],
        imageUrl:
          "http://codeby.vteximg.com.br/arquivos/ids/159942-800-1029/trufa-tradicional.png?v=636916452526400000",
        detailUrl: "/trufa-tradicional/p",
        components: [],
        bundleItems: [],
        attachments: [],
        attachmentOfferings: [],
        offerings: [],
        priceTags: [
          {
            name: "discount@price-6f7f6403-f49b-4e24-936e-bbdba265e959#246461c4-7dcc-43c1-ba10-bae715ddd480",
            value: -30,
            rawValue: -0.3,
            isPercentual: false,
            identifier: "6f7f6403-f49b-4e24-936e-bbdba265e959",
          },
        ],
        availability: "available",
        measurementUnit: "un",
        unitMultiplier: 1,
        manufacturerCode: null,
      },
    ],
    totalizers: [
      { id: "Items", name: "Total dos Itens", value: 729 },
      { id: "Discounts", name: "Total dos Descontos", value: -72 },
    ],
    itemMetadata: {
      items: [
        {
          id: "16701615",
          seller: "1",
          name: "Trufa BENDITO CACAU 55% CACAU 30 G",
          skuName: "30 G",
          productId: "317",
          refId: null,
          ean: "223311",
          imageUrl:
            "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000",
          detailUrl: "/trufa-bendito-cacau-55-/p",
          assemblyOptions: [],
        },
        {
          id: "16701612",
          seller: "1",
          name: "TRUFA MORANGO",
          skuName: "TRUFA MORANGO",
          productId: "314",
          refId: null,
          ean: "0123456789123",
          imageUrl:
            "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000",
          detailUrl: "/trufa-morango/p",
          assemblyOptions: [],
        },
        {
          id: "16701610",
          seller: "1",
          name: "TRUFA TRADICIONAL 30 G",
          skuName: "30 G",
          productId: "312",
          refId: null,
          ean: "223311",
          imageUrl:
            "http://codeby.vteximg.com.br/arquivos/ids/159942-800-1029/trufa-tradicional.png?v=636916452526400000",
          detailUrl: "/trufa-tradicional/p",
          assemblyOptions: [],
        },
      ],
    },
  });

  const [openModalCompra, setOpenModalCompra] = React.useState(false);
  // React.useEffect(async () => {
  //   await api.get('/notes').then(e => {
  //     console.log(e.data)
  //   })
  // })

  function formatValue(num) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num / 100);
  }

  function finalizarCompra(){
    setOpenModalCompra(!openModalCompra)
    setTimeout(() => {
      navigate("/")
    }, 1500)
  }

  return (
    <>
      <StyledContainer>
        <MyHeader>
          <h2>Meu Carrinho</h2>
          <hr />
        </MyHeader>
        <ListArea>
          {doces.items.map((item) => (
            <CardItem item={item} key={item.id}/>
          ))}
        </ListArea>
        <PurchaseArea>
          <div className="title-area">
            <h2>Total</h2>
            <h2>{formatValue(doces.totalizers[0].value)}</h2>
          </div>
          <button
            onClick={() => finalizarCompra()}
            className="btn btn-primary"
          >
            Finalizar compra
          </button>
        </PurchaseArea>
      </StyledContainer>
      <Modal
        isOpen={openModalCompra}
        onRequestClose={() => setOpenModalCompra(!openModalCompra)}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            // background: 'red',
          }}
        >
        <AiOutlineCheckCircle size={150} color="#3CFA5B"/> 

          <h5
            style={{
              width: "90%",
              textAlign: "center",
              marginTop: 80,
              fontSize: 30
            }}
          >
           Pedido Realizado com Sucesso
          </h5>
        </div>
      </Modal>
    </>
  );
}
