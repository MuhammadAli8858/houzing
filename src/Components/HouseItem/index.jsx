import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../Generic";
import noimg from "../../assets/img/noimg1.jpg";

import { Recommended } from "../Recent";
import nouser from "../../assets/img/nouser.png";
import airConditioner from "../../assets/icons/air-conditioner.png";

import {
  Container,
  Content,
  Del,
  Description,
  Details,
  Documents,
  Download,
  FirstName,
  Icons,
  Img,
  Property,
  Section,
  User,
  Wrapper,
  Blur,
  ImageContainer,
  ImgContainer,
  Input,
} from "./style";
import Yandex from "../Generic/Yandex";
import { Modal } from "antd";

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    // request({ url: `/houses/list/${params?.id}` }).then((res) =>
    //   setData(res?.data || [])
    // );
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  console.log(data?.attachments, "daaata");

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ImageContainer>
        <ImageContainer.Main
          src={(data?.attachments && data?.attachments[0].imgPath) || noimg}
          alt="test"
        />
        <ImgContainer>
          {data?.attachments?.slice(1, 5).map((value, index) => {
            return data?.attachments?.length > 5 && index === 3 ? (
              <Blur.Container>
                <ImageContainer.Subimg
                  key={value?.id}
                  src={value?.imgPath}
                  alt="test"
                />
                <Modal
                  title="House pictures"
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  width={1000}
                >
                  <ImageContainer.Modal>
                    {data?.attachments?.map((value, index) => {
                      return data?.attachments?.length > 5 && index === 3 ? (
                        <ImageContainer.Img
                          src={
                            (data?.attachments &&
                              data?.attachments[0].imgPath) ||
                            noimg
                          }
                          alt="test"
                        />
                      ) : (
                        <ImageContainer.Subimg
                          key={value?.id}
                          src={value?.imgPath}
                          alt={noimg}
                        />
                      );
                    })}
                  </ImageContainer.Modal>
                </Modal>

                <Blur type="primary" onClick={() => setOpen(true)}>
                  +{data?.attachments?.length - 5}
                </Blur>
              </Blur.Container>
            ) : (
              <ImageContainer.Subimg
                key={value?.id}
                src={value?.imgPath}
                alt={noimg}
              />
            );
          })}
        </ImgContainer>
      </ImageContainer>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large>{data?.name}</Content.Title>
              <div className="info">
                {data?.city}, {data?.address}, {data?.country}
              </div>
            </Content>
            <Content flex>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Love /> <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>{data?.houseDetails?.beds || 0} Bed</Details.Title>
              <Icons.Bath />
              <Details.Title>
                {data?.houseDetails?.bath || 0} Bath
              </Details.Title>
              <Icons.Garage />
              <Details.Title>
                {data?.houseDetails?.garage || 0} Garage
              </Details.Title>
              <Icons.Ruler />
              <Details.Title> {data?.houseDetails?.area || 0}kv</Details.Title>
            </Details>
            <Content>
              <Content flex>
                <Del>
                  <Details.Title>${data?.price || 0}/mo</Details.Title>
                </Del>
                <h2 className="title">${data?.salePrice || 0}/mo</h2>
              </Content>
              <FirstName className="subTitle">
                {data?.user?.firstname}
              </FirstName>
            </Content>
          </Section>
          <Content.Title mt={48}>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title mt={48}>Documents</Content.Title>
          <Documents>
            <Description.Title>
              <Icons.Download />
              test_property.pdf
              <Download href="http://localhost:3000/properties/">
                DOWNLOAD
              </Download>
            </Description.Title>
            <Description.Title>
              <Icons.Download />
              test_property.pdf
              <Download href="http://localhost:3000/properties/">
                DOWNLOAD
              </Download>
            </Description.Title>
            <Description.Title>
              <Icons.Download />
              test_property.pdf
              <Download href="http://localhost:3000/properties/">
                DOWNLOAD
              </Download>
            </Description.Title>
          </Documents>
        </Container>
        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt="user image" />
            <Content>
              <div className="subTitle">Davlyatov M. </div>
              <div className="info">+998 33 087 58 58</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Property className="subTitle">
            Message
            <Input placeholder="Hello, I am interested in ..." />
          </Property>
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Wrapper>
        <Content.Title mt={48} mb>
          <hr
            style={{
              background: "#E6E9EC",
              marginTop: "48px",
              marginBottom: "48px",
            }}
          />
          Location
          <Section>
            <Section mt={24} mb={24}>
              <Container gap={28}>
                <Content flex>
                  <Property className="subTitle">Address:</Property>
                  <Details.Title>
                    {" "}
                    {data?.address || "329 Queensberry Street"}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Property className="subTitle">State/County: </Property>
                  <Details.Title>
                    {" "}
                    {data?.stateCounty || "Washington"}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section mt={24} mb={24}>
              <Container gap={28}>
                <Content flex>
                  <Property className="subTitle">City:</Property>
                  <Details.Title> {data?.city || "Jersey City"}</Details.Title>
                </Content>
                <Content flex>
                  <Property className="subTitle">Zip:</Property>
                  <Details.Title> {data?.zip || 365448}</Details.Title>
                </Content>
              </Container>
            </Section>
            <Section mt={24} mb={24}>
              <Container gap={28}>
                <Content flex>
                  <Property className="subTitle">Area:</Property>
                  <Details.Title> {data?.area || "Greenville"}</Details.Title>
                </Content>
                <Content flex>
                  <Property className="subTitle">Country:</Property>
                  <Details.Title>
                    {data?.country || "United States"}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
          </Section>
          <Yandex />
          <hr
            style={{
              background: "#E6E9EC",
              marginTop: "48px",
              marginBottom: "48px",
            }}
          />
        </Content.Title>
      </Wrapper>
      <Wrapper>
        <Content.Title mb={32}>Property Details</Content.Title>
      </Wrapper>
      <Wrapper jc={"space-between"}>
        <Section>
          <Container gap={28}>
            <Content flex>
              <Property className="subTitle">Property ID:</Property>
              <Details.Title> {data?.property || "HZ27"}</Details.Title>
            </Content>
            <Content flex>
              <Property className="subTitle">Price:</Property>
              <Details.Title> ${data?.price || 0}</Details.Title>
            </Content>
            <Content flex>
              <Property className="subTitle">Property Size:</Property>
              <Details.Title>
                {" "}
                {data?.propertySize || "1560 Sq Ft"}
              </Details.Title>
            </Content>
            <Content flex>
              <Property className="subTitle">Year Bulit:</Property>
              <Details.Title> {data?.yaerBulit || "2021-01-09"}</Details.Title>
            </Content>
          </Container>
        </Section>
        <Section>
          <Container gap={28}>
            <Content flex>
              <Property className="subTitle">Bedrooms:</Property>
              <Details.Title> {data?.bedrooms || 8}</Details.Title>
            </Content>
            <Content flex>
              <Property className="subTitle">Bathrooms:</Property>
              <Details.Title> {data?.bathrooms || 6}</Details.Title>
            </Content>
            <Content flex>
              <Property className="subTitle">Garage:</Property>
              <Details.Title>{data?.houseDetails?.garage || 0}</Details.Title>
            </Content>
            <Content flex>
              <Property className="subTitle">Garage size:</Property>
              <Details.Title> {data?.garageSize || "200 SqFt"}</Details.Title>
            </Content>
          </Container>
        </Section>
        <Section>
          <Container gap={28}>
            <Content flex>
              <Property className="subTitle">Property Type:</Property>
              <Details.Title>
                {" "}
                {data?.propertyType || "Apartment"}
              </Details.Title>
            </Content>
            <Content flex>
              <Property className="subTitle">Property Status:</Property>
              <Details.Title>
                {" "}
                {data?.propertyStatus || "For Sale"}
              </Details.Title>
            </Content>
          </Container>
        </Section>
      </Wrapper>
      <Wrapper>
        <Content.Title>
          <hr
            style={{
              background: "#E6E9EC",
              marginTop: "48px",
              marginBottom: "48px",
            }}
          />
        </Content.Title>
      </Wrapper>
      <Wrapper>
        <Content.Title mb={32}>Features</Content.Title>
      </Wrapper>
      <Wrapper jc={"space-between"}>
        <Section>
          <Container gap={28}>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.AirConditioner />
              </Img>
              <Details.Title> Air Conditioning</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Barbeque />
              </Img>
              <Details.Title> Barbeque</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Dryer />
              </Img>
              <Details.Title> Dryer</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Gym />
              </Img>
              <Details.Title> Gym</Details.Title>
            </Content>
          </Container>
        </Section>
        <Section>
          {" "}
          <Container gap={28}>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Lawn />
              </Img>
              <Details.Title> Lawn</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Laundry />
              </Img>
              <Details.Title> Laundry</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Microwave />
              </Img>
              <Details.Title> Microwave</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.OutdoorShower />
              </Img>
              <Details.Title> Outdoor Shower</Details.Title>
            </Content>
          </Container>
        </Section>
        <Section>
          {" "}
          <Container gap={28}>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Refrigerator />
              </Img>
              <Details.Title> Refrigerator</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Sauna />
              </Img>
              <Details.Title> Sauna</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.SwimmingPool />
              </Img>
              <Details.Title> Swimming Pool</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.TVCable />
              </Img>
              <Details.Title> TV Cable</Details.Title>
            </Content>
          </Container>
        </Section>
        <Section>
          <Container gap={28}>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Washer />
              </Img>
              <Details.Title> Washer</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.Wifi />
              </Img>
              <Details.Title> WiFi</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.WindowCoverings />
              </Img>
              <Details.Title> Window Coverings</Details.Title>
            </Content>
            <Content flex>
              <Img src={airConditioner}>
                <Icons.DiningRoom />
              </Img>
              <Details.Title> Dining room</Details.Title>
            </Content>
          </Container>
        </Section>
      </Wrapper>
      <Recommended />
    </React.Fragment>
  );
};

export default HouseItem;
