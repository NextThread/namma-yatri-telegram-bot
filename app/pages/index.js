import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header className="text-white">

          Namma Yatri
        </Header>

        <ActionButtons>
          <Link href="/search" passHref>
            <ActionButton className="text-white">
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton className="text-red-600">
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels(NA)
          </ActionButton>
          <ActionButton className="text-red-600">
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve(NA)
          </ActionButton>
        </ActionButtons>
        <Link href="/search" passHref>
          <InputButton className="text-white">Where to ?</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 flex flex-col h-screen bg-black
`;

const ActionItems = tw.div`
 flex-1 p-4
`;

const Header = tw.div`
 flex justify-between items-center text-4xl m-2 mb-8 mt-4 
`;

const UberLogo = tw.img`
 h-28
`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl curson-pointer bg-gray-600	
`;

const ActionButtonImage = tw.img`
h-3/5 
`;

const InputButton = tw.div`
h-20 bg-gray-500 text-2xl p-4 flex items-center justify-center rounded-lg transform hover:scale-105 transition mt-8
`;
