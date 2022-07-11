import TobBar from "./../layout/TopBar";
import {
  Container,
  User,
  Box,
  Main,
  Travels,
  Travel,
  City,
  Value,
} from "./styles.js";
export default function Historico() {
  return (
    <>
      <TobBar></TobBar>
      <Container>
        <User>
          <span>
            <ion-icon name="bookmarks-outline"></ion-icon>
          </span>
          <Box>
            <p> Histórico de viagens </p>
          </Box>
        </User>
        <Main>
          <Travels>
            <Travel>
              <City>
                <span>
                  <ion-icon name="airplane-outline"></ion-icon>
                </span>
                <div>
                  <p>Paris - França</p>
                </div>
              </City>
              <Value>
                <span>
                  <ion-icon name="cash-outline"></ion-icon>
                </span>
                <div>
                  <p>2500 $</p>
                </div>
              </Value>
            </Travel>
            <Travel>
              <City>
                <span>
                  <ion-icon name="airplane-outline"></ion-icon>
                </span>
                <div>
                  <p>Paris - França</p>
                </div>
              </City>
              <Value>
                <span>
                  <ion-icon name="cash-outline"></ion-icon>
                </span>
                <div>
                  <p>2500 $</p>
                </div>
              </Value>
            </Travel>
            <Travel>
              <City>
                <span>
                  <ion-icon name="airplane-outline"></ion-icon>
                </span>
                <div>
                  <p>Paris - França</p>
                </div>
              </City>
              <Value>
                <span>
                  <ion-icon name="cash-outline"></ion-icon>
                </span>
                <div>
                  <p>2500 $</p>
                </div>
              </Value>
            </Travel>
            <Travel>
              <City>
                <span>
                  <ion-icon name="airplane-outline"></ion-icon>
                </span>
                <div>
                  <p>Paris - França</p>
                </div>
              </City>
              <Value>
                <span>
                  <ion-icon name="cash-outline"></ion-icon>
                </span>
                <div>
                  <p>2500 $</p>
                </div>
              </Value>
            </Travel>
          </Travels>
        </Main>
      </Container>
    </>
  );
}
