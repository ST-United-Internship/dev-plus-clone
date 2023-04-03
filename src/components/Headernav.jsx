import { Menu, Grid, Drawer, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../assets/css/headernav.css";

const { useBreakpoint } = Grid;

export const Headernav = ({ galleries }) => {
  const [openSide, setOpenSide] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { lg } = useBreakpoint();

  const toggleDrawer = (e) => {
    e.stopPropagation();
    setOpenSide(!openSide);
  };
  const toggleMenu = (e) => {
    e.stopPropagation();
    if (!lg && e.target.classList.contains("drop")) setOpenMenu(!openMenu);
  };
  return (
    <Row justify="center">
      <Col
        xs={{ span: 23 }}
        sm={{ span: 24 }}
        md={{ span: 22 }}
        lg={{ span: 22 }}
        xl={{ span: 20 }}
        xxl={{ span: 16 }}
      >
        <nav className="navbar">
          <div className="nav-main">
            <a>
              <img
                style={{ maxHeight: "35px" }}
                src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png"
              ></img>
            </a>
            <div
              className={
                "nav-menu " + (!lg ? "drop " : "") + (openMenu ? "show" : "")
              }
              onClick={toggleMenu}
            >
              <div>
                <Menu
                  items={[
                    { label: "HOME", key: 0 },
                    { label: "ABOUT DEVPLUS", key: 1 },
                    {
                      label: "OUR PROGRAMME",
                      key: 2,
                      children: [
                        { label: "One Plus Campus", key: 2.1 },
                        { label: "Two Plus Campus", key: 2.2 },
                        { label: "Three Plus Campus", key: 2.3 },
                      ],
                      className: `nav-sub ${lg ? "" : "collapse"}`,
                    },
                    { label: "DEVPLUS ACTIVITIES", key: 3 },
                  ]}
                  mode={lg ? "horizontal" : "inline"}
                />
              </div>
            </div>
          </div>
          <MenuOutlined onClick={toggleDrawer} />
          <Drawer
            className="drawer"
            placement="right"
            open={openSide}
            onClose={toggleDrawer}
          >
            <a className="drawer-logo">
              <img src="https://devplus.edu.vn/assets/images/Artboard_2.png"></img>
            </a>
            <p>
              Devplus's mission is filling the gap between school and corporate,
              reduce in-house training cost and effort for IT companies.
            </p>
            <ul>
              {galleries.map((item) => (
                <li key={item.src}>
                  <a>
                    <img src={item.src}></img>
                  </a>
                </li>
              ))}
            </ul>
            <div className="drawer-map">
              <img src="https://devplus.edu.vn/assets/images/map.png"></img>
            </div>
            <i></i>
          </Drawer>
        </nav>
      </Col>
    </Row>
  );
};
