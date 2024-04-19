import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';


function CollapsibleExample() {
  return (
   
    <Navbar collapseOnSelect expand="lg" className="flex items-center">
      <Container >
        <Navbar.Brand href="#home">
          <Image alt="logo" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" srcset="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp 1x, https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp 2x" width="147" height="31"></Image>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto flex items-center">

          <Nav.Link href="">
            <NavDropdown title="Demo" id="collapsible-nav-dropdown m-auto ">
              <div className='flex w-screen right-0'>
              <NavDropdown.Item href="">
                  <div className='leading-10'>
                    <div >
                    <Image width="467" height="276" src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu.webp" class="attachment-full size-full wp-image-266" alt="" loading="lazy" srcset="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu.webp 467w, https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/01/Plant-and-garden-menu-300x177.webp 300w" sizes="(max-width: 467px) 100vw, 467px"/>
                    </div>
                    <div>New produvt on the market</div>
                    <div className='text-muted'>Shop Now</div>
                  </div>
              </NavDropdown.Item>

              <NavDropdown.Item href="">
                  <div >
                <div className='py-12 '>
                  <ul className='leading-10'>
                    <li><a href="">Fashion Hub</a></li>
                    <li><a href="">Kids Wear</a></li>
                    <li><a href="">Women Fashion</a></li>
                    <li><a href="">Big Fashion</a></li>
                    <li><a href="">Fashion Store</a></li>
                    <li><a href="">Handicraft</a></li>
                    <li><a href="">Interior</a></li>
                  </ul>
                  </div>
                </div>
              </NavDropdown.Item>

              <NavDropdown.Item href="">
              <div>
                <div className='py-12 '>
                  <ul className='leading-10 '>
                    <li><a href="">Plant Graden</a></li>
                    <li><a href="">Kid Toys</a></li>
                    <li><a href="">Electronic Gadget</a></li>
                    <li><a href="">Bathroom</a></li>
                    <li><a href="">Bicycle</a></li>
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Bags</a></li>
                  </ul>
                </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <div>
                <div className='py-12'>
                  <ul className='leading-10'>
                    <li className='w-auto p-0 '><a href="">Soap</a></li>
                    <li><a href="">Skin Care</a></li>
                    <li><a href=""><span>Grocery Outlet</span><span className='bg-red-400 px-2 rounded-xl text-white ms-3'>new</span></a></li>
                    <li><a href=""><span>Hiking Heaven</span><span className='bg-red-400 px-2 rounded-xl text-white ms-3'>new</span></a></li>
                    <li><a href=""><span>Exotic Fragrences</span><span className='bg-red-400 px-2 rounded-xl text-white ms-3'>new</span></a></li>
                  </ul>
                </div>
                </div>
              </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav.Link>

     
          

           
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default CollapsibleExample;