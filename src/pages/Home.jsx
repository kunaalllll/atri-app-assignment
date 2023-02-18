import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useNavbarCb, useNav_leftCb, useFlex_left_imgCb, useFlex_left_menuCb, useNav_rightCb, useHero_SectionCb, useFlex_hero_leftCb, useFlex15Cb, useDiv3Cb, useFlex17Cb, useFlex18Cb, useFlex_hero_rCb, useFavorite_AppsCb, useDiv4Cb, useFlex21Cb, useCategoryCb, useDiv5Cb, useCard_ContCb, useFlex25Cb, useFlex26Cb, useFlex27Cb, useFlex28Cb, useFlex24Cb, useAbout_UsCb, useFlex154Cb, useAbout_RhtCb, useFlex33Cb, useAbout_leftCb, useDiv8Cb, useFlex36Cb, useDiv9Cb, useFlex37Cb, useDiv10Cb, useFlex38Cb, useDiv11Cb, useFlex39Cb, useDiv12Cb, useMenuCb, useDiv13Cb, useDiv14Cb, usecont1Cb, useFlex43Cb, useDiv18Cb, useDiv19Cb, useDiv34Cb, useFlex44Cb, useDiv20Cb, useDiv21Cb, useDiv35Cb, useFlex45Cb, useDiv22Cb, useDiv23Cb, useDiv36Cb, useFlex46Cb, useDiv24Cb, useDiv25Cb, useDiv37Cb, usecont2Cb, useFlex49Cb, useDiv26Cb, useDiv27Cb, useDiv38Cb, useFlex50Cb, useDiv28Cb, useDiv29Cb, useDiv39Cb, useFlex51Cb, useDiv30Cb, useDiv31Cb, useDiv40Cb, useFlex52Cb, useDiv32Cb, useDiv33Cb, useDiv41Cb, useFlex53Cb, useSection_CtaCb, useleftCb, useFlex153Cb, useDiv54Cb, useDiv55Cb, useFlex62Cb, userightCb, useTestimonialsCb, useDiv56Cb, useDiv57Cb, useDiv58Cb, useFlex_ContCb, useDiv59Cb, useFlexContCb, useFlexstaCb, useDiv69Cb, useDiv70Cb, useDiv71Cb, useFlex73Cb, useDiv72Cb, useFlex74Cb, useDiv73Cb, useDiv74Cb, useDiv60Cb, useFlex75Cb, useArticlesCb, useflleftCb, useDiv75Cb, useDiv179Cb, useDiv76Cb, useDiv77Cb, useDiv78Cb, useDiv79Cb, useflrightCb, useDiv85Cb, useFlex87Cb, useFlex85Cb, useDiv93Cb, useDiv94Cb, useDiv95Cb, useFlex86Cb, useDiv96Cb, useDiv97Cb, useDiv98Cb, useFlex157Cb, useFlex155Cb, useDiv173Cb, useDiv174Cb, useDiv175Cb, useFlex156Cb, useDiv176Cb, useDiv177Cb, useDiv178Cb, useContactCb, useLeftCoCb, useDiv100Cb, useDiv101Cb, useFlex106Cb, useDiv106Cb, useDiv107Cb, useFlex107Cb, useDiv108Cb, useDiv109Cb, useFlex108Cb, useDiv110Cb, useDiv111Cb, useRightCoCb, usergtmainCb, usecontriCb, useDiv114Cb, useDiv115Cb, useFlex117Cb, useDiv124Cb, useDiv125Cb, useFlex119Cb, useDiv128Cb, useDiv129Cb, useDiv134Cb, useFlex120Cb, useDiv131Cb, useDiv138Cb, useSocialsCb, useFlex123Cb, useDiv139Cb, useFlex124Cb, useDiv140Cb, useDiv141Cb, useFlex125Cb, useFlex126Cb, useDiv142Cb, useDiv143Cb, useFlex129Cb, useDiv146Cb, useDiv147Cb, useFooterCb, useFlex1Cb, useFlex134Cb, useDiv148Cb, useDiv150Cb, useFlex135Cb, useDiv151Cb, useDiv153Cb, useDiv154Cb, useDiv155Cb, useDiv156Cb, useFlex2Cb, useFlex150Cb, useFlex152Cb, useFlex3Cb, useDiv165Cb, useFlex145Cb, useDiv166Cb, useDiv167Cb, useFlex146Cb, useDiv168Cb, useDiv169Cb, useImage4Cb, useTextBox6Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useTextBox10Cb, useButton5Cb, useButton6Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useButton8Cb, useButton9Cb, useImage5Cb, useTextBox18Cb, useImage6Cb, useImage8Cb, useImage9Cb, useImage10Cb, useTextBox19Cb, useImage13Cb, useTextBox22Cb, useTextBox23Cb, useTextBox30Cb, useImage14Cb, useTextBox24Cb, useTextBox25Cb, useTextBox31Cb, useImage15Cb, useTextBox26Cb, useTextBox27Cb, useTextBox32Cb, useImage16Cb, useTextBox28Cb, useTextBox29Cb, useTextBox33Cb, useButton10Cb, useButton11Cb, useTextBox34Cb, useTextBox35Cb, useTextBox36Cb, useButton12Cb, useButton13Cb, useImage18Cb, useTextBox37Cb, useImage19Cb, useTextBox38Cb, useImage20Cb, useTextBox39Cb, useImage21Cb, useTextBox40Cb, useTextBox41Cb, useTextBox42Cb, useTextBox45Cb, useTextBox46Cb, useImage31Cb, useButton25Cb, useTextBox47Cb, useTextBox48Cb, useImage24Cb, useButton16Cb, useTextBox49Cb, useTextBox50Cb, useImage25Cb, useButton17Cb, useTextBox51Cb, useTextBox52Cb, useImage26Cb, useButton18Cb, useTextBox53Cb, useTextBox54Cb, useImage27Cb, useButton19Cb, useTextBox55Cb, useTextBox56Cb, useImage28Cb, useButton20Cb, useTextBox57Cb, useTextBox58Cb, useImage29Cb, useButton21Cb, useTextBox59Cb, useTextBox60Cb, useImage30Cb, useButton22Cb, useButton23Cb, useButton24Cb, useTextBox65Cb, useTextBox66Cb, useButton31Cb, useButton32Cb, useImage34Cb, useTextBox67Cb, useTextBox68Cb, useTextBox69Cb, useImage35Cb, useImage43Cb, useImage44Cb, useImage45Cb, useImage46Cb, useImage47Cb, useTextBox76Cb, useTextBox77Cb, useImage48Cb, useTextBox78Cb, useTextBox79Cb, useImage36Cb, useButton35Cb, useButton36Cb, useTextBox80Cb, useImage49Cb, useTextBox81Cb, useTextBox82Cb, useTextBox83Cb, useTextBox86Cb, useImage53Cb, useTextBox97Cb, useTextBox98Cb, useTextBox100Cb, useTextBox99Cb, useImage54Cb, useImage83Cb, useTextBox213Cb, useTextBox214Cb, useTextBox215Cb, useTextBox216Cb, useImage84Cb, useTextBox101Cb, useTextBox102Cb, useImage57Cb, useTextBox104Cb, useTextBox105Cb, useImage58Cb, useTextBox106Cb, useImage59Cb, useTextBox107Cb, useInput2Cb, useTextBox109Cb, useInput18Cb, useTextBox121Cb, useInput20Cb, useTextBox122Cb, useInput19Cb, useTextBox124Cb, useInput21Cb, useTextBox125Cb, useInput22Cb, useButton38Cb, useTextBox131Cb, useInput25Cb, useButton39Cb, useTextBox132Cb, useImage60Cb, useImage68Cb, useImage71Cb, useImage70Cb, useImage69Cb, useImage67Cb, useImage72Cb, useTextBox134Cb, useImage73Cb, useImage75Cb, useImage76Cb, useImage77Cb, useImage78Cb, useTextBox197Cb, useTextBox198Cb, useTextBox199Cb, useTextBox200Cb, useTextBox201Cb, useTextBox202Cb, useTextBox203Cb, useTextBox204Cb, useTextBox205Cb, useTextBox206Cb, useTextBox207Cb, useTextBox208Cb, useTextBox209Cb, useTextBox210Cb, useTextBox211Cb, useTextBox212Cb, useTextBox170Cb, useImage79Cb, useImage80Cb, useImage81Cb, useImage82Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const Nav_leftProps = useStore((state)=>state["Home"]["Nav_left"]);
const Nav_leftIoProps = useIoStore((state)=>state["Home"]["Nav_left"]);
const Nav_leftCb = useNav_leftCb()
const Flex_left_imgProps = useStore((state)=>state["Home"]["Flex_left_img"]);
const Flex_left_imgIoProps = useIoStore((state)=>state["Home"]["Flex_left_img"]);
const Flex_left_imgCb = useFlex_left_imgCb()
const Flex_left_menuProps = useStore((state)=>state["Home"]["Flex_left_menu"]);
const Flex_left_menuIoProps = useIoStore((state)=>state["Home"]["Flex_left_menu"]);
const Flex_left_menuCb = useFlex_left_menuCb()
const Nav_rightProps = useStore((state)=>state["Home"]["Nav_right"]);
const Nav_rightIoProps = useIoStore((state)=>state["Home"]["Nav_right"]);
const Nav_rightCb = useNav_rightCb()
const Hero_SectionProps = useStore((state)=>state["Home"]["Hero_Section"]);
const Hero_SectionIoProps = useIoStore((state)=>state["Home"]["Hero_Section"]);
const Hero_SectionCb = useHero_SectionCb()
const Flex_hero_leftProps = useStore((state)=>state["Home"]["Flex_hero_left"]);
const Flex_hero_leftIoProps = useIoStore((state)=>state["Home"]["Flex_hero_left"]);
const Flex_hero_leftCb = useFlex_hero_leftCb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex_hero_rProps = useStore((state)=>state["Home"]["Flex_hero_r"]);
const Flex_hero_rIoProps = useIoStore((state)=>state["Home"]["Flex_hero_r"]);
const Flex_hero_rCb = useFlex_hero_rCb()
const Favorite_AppsProps = useStore((state)=>state["Home"]["Favorite_Apps"]);
const Favorite_AppsIoProps = useIoStore((state)=>state["Home"]["Favorite_Apps"]);
const Favorite_AppsCb = useFavorite_AppsCb()
const Div4Props = useStore((state)=>state["Home"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["Home"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const CategoryProps = useStore((state)=>state["Home"]["Category"]);
const CategoryIoProps = useIoStore((state)=>state["Home"]["Category"]);
const CategoryCb = useCategoryCb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Card_ContProps = useStore((state)=>state["Home"]["Card_Cont"]);
const Card_ContIoProps = useIoStore((state)=>state["Home"]["Card_Cont"]);
const Card_ContCb = useCard_ContCb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const About_UsProps = useStore((state)=>state["Home"]["About_Us"]);
const About_UsIoProps = useIoStore((state)=>state["Home"]["About_Us"]);
const About_UsCb = useAbout_UsCb()
const Flex154Props = useStore((state)=>state["Home"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Home"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const About_RhtProps = useStore((state)=>state["Home"]["About_Rht"]);
const About_RhtIoProps = useIoStore((state)=>state["Home"]["About_Rht"]);
const About_RhtCb = useAbout_RhtCb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const About_leftProps = useStore((state)=>state["Home"]["About_left"]);
const About_leftIoProps = useIoStore((state)=>state["Home"]["About_left"]);
const About_leftCb = useAbout_leftCb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const MenuProps = useStore((state)=>state["Home"]["Menu"]);
const MenuIoProps = useIoStore((state)=>state["Home"]["Menu"]);
const MenuCb = useMenuCb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const cont1Props = useStore((state)=>state["Home"]["cont1"]);
const cont1IoProps = useIoStore((state)=>state["Home"]["cont1"]);
const cont1Cb = usecont1Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Div20Props = useStore((state)=>state["Home"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Home"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Div21Props = useStore((state)=>state["Home"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Home"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Div35Props = useStore((state)=>state["Home"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Home"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const Div23Props = useStore((state)=>state["Home"]["Div23"]);
const Div23IoProps = useIoStore((state)=>state["Home"]["Div23"]);
const Div23Cb = useDiv23Cb()
const Div36Props = useStore((state)=>state["Home"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["Home"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Div24Props = useStore((state)=>state["Home"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Home"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Div25Props = useStore((state)=>state["Home"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Home"]["Div25"]);
const Div25Cb = useDiv25Cb()
const Div37Props = useStore((state)=>state["Home"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["Home"]["Div37"]);
const Div37Cb = useDiv37Cb()
const cont2Props = useStore((state)=>state["Home"]["cont2"]);
const cont2IoProps = useIoStore((state)=>state["Home"]["cont2"]);
const cont2Cb = usecont2Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Div28Props = useStore((state)=>state["Home"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Home"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Div39Props = useStore((state)=>state["Home"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["Home"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const Div31Props = useStore((state)=>state["Home"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Home"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Div32Props = useStore((state)=>state["Home"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Home"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Div33Props = useStore((state)=>state["Home"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["Home"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Section_CtaProps = useStore((state)=>state["Home"]["Section_Cta"]);
const Section_CtaIoProps = useIoStore((state)=>state["Home"]["Section_Cta"]);
const Section_CtaCb = useSection_CtaCb()
const leftProps = useStore((state)=>state["Home"]["left"]);
const leftIoProps = useIoStore((state)=>state["Home"]["left"]);
const leftCb = useleftCb()
const Flex153Props = useStore((state)=>state["Home"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["Home"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Div54Props = useStore((state)=>state["Home"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home"]["Div54"]);
const Div54Cb = useDiv54Cb()
const Div55Props = useStore((state)=>state["Home"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["Home"]["Div55"]);
const Div55Cb = useDiv55Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const rightProps = useStore((state)=>state["Home"]["right"]);
const rightIoProps = useIoStore((state)=>state["Home"]["right"]);
const rightCb = userightCb()
const TestimonialsProps = useStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsIoProps = useIoStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsCb = useTestimonialsCb()
const Div56Props = useStore((state)=>state["Home"]["Div56"]);
const Div56IoProps = useIoStore((state)=>state["Home"]["Div56"]);
const Div56Cb = useDiv56Cb()
const Div57Props = useStore((state)=>state["Home"]["Div57"]);
const Div57IoProps = useIoStore((state)=>state["Home"]["Div57"]);
const Div57Cb = useDiv57Cb()
const Div58Props = useStore((state)=>state["Home"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home"]["Div58"]);
const Div58Cb = useDiv58Cb()
const Flex_ContProps = useStore((state)=>state["Home"]["Flex_Cont"]);
const Flex_ContIoProps = useIoStore((state)=>state["Home"]["Flex_Cont"]);
const Flex_ContCb = useFlex_ContCb()
const Div59Props = useStore((state)=>state["Home"]["Div59"]);
const Div59IoProps = useIoStore((state)=>state["Home"]["Div59"]);
const Div59Cb = useDiv59Cb()
const FlexContProps = useStore((state)=>state["Home"]["FlexCont"]);
const FlexContIoProps = useIoStore((state)=>state["Home"]["FlexCont"]);
const FlexContCb = useFlexContCb()
const FlexstaProps = useStore((state)=>state["Home"]["Flexsta"]);
const FlexstaIoProps = useIoStore((state)=>state["Home"]["Flexsta"]);
const FlexstaCb = useFlexstaCb()
const Div69Props = useStore((state)=>state["Home"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["Home"]["Div69"]);
const Div69Cb = useDiv69Cb()
const Div70Props = useStore((state)=>state["Home"]["Div70"]);
const Div70IoProps = useIoStore((state)=>state["Home"]["Div70"]);
const Div70Cb = useDiv70Cb()
const Div71Props = useStore((state)=>state["Home"]["Div71"]);
const Div71IoProps = useIoStore((state)=>state["Home"]["Div71"]);
const Div71Cb = useDiv71Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Div72Props = useStore((state)=>state["Home"]["Div72"]);
const Div72IoProps = useIoStore((state)=>state["Home"]["Div72"]);
const Div72Cb = useDiv72Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Div73Props = useStore((state)=>state["Home"]["Div73"]);
const Div73IoProps = useIoStore((state)=>state["Home"]["Div73"]);
const Div73Cb = useDiv73Cb()
const Div74Props = useStore((state)=>state["Home"]["Div74"]);
const Div74IoProps = useIoStore((state)=>state["Home"]["Div74"]);
const Div74Cb = useDiv74Cb()
const Div60Props = useStore((state)=>state["Home"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["Home"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const ArticlesProps = useStore((state)=>state["Home"]["Articles"]);
const ArticlesIoProps = useIoStore((state)=>state["Home"]["Articles"]);
const ArticlesCb = useArticlesCb()
const flleftProps = useStore((state)=>state["Home"]["flleft"]);
const flleftIoProps = useIoStore((state)=>state["Home"]["flleft"]);
const flleftCb = useflleftCb()
const Div75Props = useStore((state)=>state["Home"]["Div75"]);
const Div75IoProps = useIoStore((state)=>state["Home"]["Div75"]);
const Div75Cb = useDiv75Cb()
const Div179Props = useStore((state)=>state["Home"]["Div179"]);
const Div179IoProps = useIoStore((state)=>state["Home"]["Div179"]);
const Div179Cb = useDiv179Cb()
const Div76Props = useStore((state)=>state["Home"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home"]["Div76"]);
const Div76Cb = useDiv76Cb()
const Div77Props = useStore((state)=>state["Home"]["Div77"]);
const Div77IoProps = useIoStore((state)=>state["Home"]["Div77"]);
const Div77Cb = useDiv77Cb()
const Div78Props = useStore((state)=>state["Home"]["Div78"]);
const Div78IoProps = useIoStore((state)=>state["Home"]["Div78"]);
const Div78Cb = useDiv78Cb()
const Div79Props = useStore((state)=>state["Home"]["Div79"]);
const Div79IoProps = useIoStore((state)=>state["Home"]["Div79"]);
const Div79Cb = useDiv79Cb()
const flrightProps = useStore((state)=>state["Home"]["flright"]);
const flrightIoProps = useIoStore((state)=>state["Home"]["flright"]);
const flrightCb = useflrightCb()
const Div85Props = useStore((state)=>state["Home"]["Div85"]);
const Div85IoProps = useIoStore((state)=>state["Home"]["Div85"]);
const Div85Cb = useDiv85Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Div93Props = useStore((state)=>state["Home"]["Div93"]);
const Div93IoProps = useIoStore((state)=>state["Home"]["Div93"]);
const Div93Cb = useDiv93Cb()
const Div94Props = useStore((state)=>state["Home"]["Div94"]);
const Div94IoProps = useIoStore((state)=>state["Home"]["Div94"]);
const Div94Cb = useDiv94Cb()
const Div95Props = useStore((state)=>state["Home"]["Div95"]);
const Div95IoProps = useIoStore((state)=>state["Home"]["Div95"]);
const Div95Cb = useDiv95Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Div96Props = useStore((state)=>state["Home"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["Home"]["Div96"]);
const Div96Cb = useDiv96Cb()
const Div97Props = useStore((state)=>state["Home"]["Div97"]);
const Div97IoProps = useIoStore((state)=>state["Home"]["Div97"]);
const Div97Cb = useDiv97Cb()
const Div98Props = useStore((state)=>state["Home"]["Div98"]);
const Div98IoProps = useIoStore((state)=>state["Home"]["Div98"]);
const Div98Cb = useDiv98Cb()
const Flex157Props = useStore((state)=>state["Home"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["Home"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex155Props = useStore((state)=>state["Home"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["Home"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Div173Props = useStore((state)=>state["Home"]["Div173"]);
const Div173IoProps = useIoStore((state)=>state["Home"]["Div173"]);
const Div173Cb = useDiv173Cb()
const Div174Props = useStore((state)=>state["Home"]["Div174"]);
const Div174IoProps = useIoStore((state)=>state["Home"]["Div174"]);
const Div174Cb = useDiv174Cb()
const Div175Props = useStore((state)=>state["Home"]["Div175"]);
const Div175IoProps = useIoStore((state)=>state["Home"]["Div175"]);
const Div175Cb = useDiv175Cb()
const Flex156Props = useStore((state)=>state["Home"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Home"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Div176Props = useStore((state)=>state["Home"]["Div176"]);
const Div176IoProps = useIoStore((state)=>state["Home"]["Div176"]);
const Div176Cb = useDiv176Cb()
const Div177Props = useStore((state)=>state["Home"]["Div177"]);
const Div177IoProps = useIoStore((state)=>state["Home"]["Div177"]);
const Div177Cb = useDiv177Cb()
const Div178Props = useStore((state)=>state["Home"]["Div178"]);
const Div178IoProps = useIoStore((state)=>state["Home"]["Div178"]);
const Div178Cb = useDiv178Cb()
const ContactProps = useStore((state)=>state["Home"]["Contact"]);
const ContactIoProps = useIoStore((state)=>state["Home"]["Contact"]);
const ContactCb = useContactCb()
const LeftCoProps = useStore((state)=>state["Home"]["LeftCo"]);
const LeftCoIoProps = useIoStore((state)=>state["Home"]["LeftCo"]);
const LeftCoCb = useLeftCoCb()
const Div100Props = useStore((state)=>state["Home"]["Div100"]);
const Div100IoProps = useIoStore((state)=>state["Home"]["Div100"]);
const Div100Cb = useDiv100Cb()
const Div101Props = useStore((state)=>state["Home"]["Div101"]);
const Div101IoProps = useIoStore((state)=>state["Home"]["Div101"]);
const Div101Cb = useDiv101Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Div106Props = useStore((state)=>state["Home"]["Div106"]);
const Div106IoProps = useIoStore((state)=>state["Home"]["Div106"]);
const Div106Cb = useDiv106Cb()
const Div107Props = useStore((state)=>state["Home"]["Div107"]);
const Div107IoProps = useIoStore((state)=>state["Home"]["Div107"]);
const Div107Cb = useDiv107Cb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Div108Props = useStore((state)=>state["Home"]["Div108"]);
const Div108IoProps = useIoStore((state)=>state["Home"]["Div108"]);
const Div108Cb = useDiv108Cb()
const Div109Props = useStore((state)=>state["Home"]["Div109"]);
const Div109IoProps = useIoStore((state)=>state["Home"]["Div109"]);
const Div109Cb = useDiv109Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Div110Props = useStore((state)=>state["Home"]["Div110"]);
const Div110IoProps = useIoStore((state)=>state["Home"]["Div110"]);
const Div110Cb = useDiv110Cb()
const Div111Props = useStore((state)=>state["Home"]["Div111"]);
const Div111IoProps = useIoStore((state)=>state["Home"]["Div111"]);
const Div111Cb = useDiv111Cb()
const RightCoProps = useStore((state)=>state["Home"]["RightCo"]);
const RightCoIoProps = useIoStore((state)=>state["Home"]["RightCo"]);
const RightCoCb = useRightCoCb()
const rgtmainProps = useStore((state)=>state["Home"]["rgtmain"]);
const rgtmainIoProps = useIoStore((state)=>state["Home"]["rgtmain"]);
const rgtmainCb = usergtmainCb()
const contriProps = useStore((state)=>state["Home"]["contri"]);
const contriIoProps = useIoStore((state)=>state["Home"]["contri"]);
const contriCb = usecontriCb()
const Div114Props = useStore((state)=>state["Home"]["Div114"]);
const Div114IoProps = useIoStore((state)=>state["Home"]["Div114"]);
const Div114Cb = useDiv114Cb()
const Div115Props = useStore((state)=>state["Home"]["Div115"]);
const Div115IoProps = useIoStore((state)=>state["Home"]["Div115"]);
const Div115Cb = useDiv115Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Div124Props = useStore((state)=>state["Home"]["Div124"]);
const Div124IoProps = useIoStore((state)=>state["Home"]["Div124"]);
const Div124Cb = useDiv124Cb()
const Div125Props = useStore((state)=>state["Home"]["Div125"]);
const Div125IoProps = useIoStore((state)=>state["Home"]["Div125"]);
const Div125Cb = useDiv125Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Div128Props = useStore((state)=>state["Home"]["Div128"]);
const Div128IoProps = useIoStore((state)=>state["Home"]["Div128"]);
const Div128Cb = useDiv128Cb()
const Div129Props = useStore((state)=>state["Home"]["Div129"]);
const Div129IoProps = useIoStore((state)=>state["Home"]["Div129"]);
const Div129Cb = useDiv129Cb()
const Div134Props = useStore((state)=>state["Home"]["Div134"]);
const Div134IoProps = useIoStore((state)=>state["Home"]["Div134"]);
const Div134Cb = useDiv134Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Div131Props = useStore((state)=>state["Home"]["Div131"]);
const Div131IoProps = useIoStore((state)=>state["Home"]["Div131"]);
const Div131Cb = useDiv131Cb()
const Div138Props = useStore((state)=>state["Home"]["Div138"]);
const Div138IoProps = useIoStore((state)=>state["Home"]["Div138"]);
const Div138Cb = useDiv138Cb()
const SocialsProps = useStore((state)=>state["Home"]["Socials"]);
const SocialsIoProps = useIoStore((state)=>state["Home"]["Socials"]);
const SocialsCb = useSocialsCb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Div139Props = useStore((state)=>state["Home"]["Div139"]);
const Div139IoProps = useIoStore((state)=>state["Home"]["Div139"]);
const Div139Cb = useDiv139Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Div140Props = useStore((state)=>state["Home"]["Div140"]);
const Div140IoProps = useIoStore((state)=>state["Home"]["Div140"]);
const Div140Cb = useDiv140Cb()
const Div141Props = useStore((state)=>state["Home"]["Div141"]);
const Div141IoProps = useIoStore((state)=>state["Home"]["Div141"]);
const Div141Cb = useDiv141Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Div142Props = useStore((state)=>state["Home"]["Div142"]);
const Div142IoProps = useIoStore((state)=>state["Home"]["Div142"]);
const Div142Cb = useDiv142Cb()
const Div143Props = useStore((state)=>state["Home"]["Div143"]);
const Div143IoProps = useIoStore((state)=>state["Home"]["Div143"]);
const Div143Cb = useDiv143Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Div146Props = useStore((state)=>state["Home"]["Div146"]);
const Div146IoProps = useIoStore((state)=>state["Home"]["Div146"]);
const Div146Cb = useDiv146Cb()
const Div147Props = useStore((state)=>state["Home"]["Div147"]);
const Div147IoProps = useIoStore((state)=>state["Home"]["Div147"]);
const Div147Cb = useDiv147Cb()
const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Div148Props = useStore((state)=>state["Home"]["Div148"]);
const Div148IoProps = useIoStore((state)=>state["Home"]["Div148"]);
const Div148Cb = useDiv148Cb()
const Div150Props = useStore((state)=>state["Home"]["Div150"]);
const Div150IoProps = useIoStore((state)=>state["Home"]["Div150"]);
const Div150Cb = useDiv150Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Div151Props = useStore((state)=>state["Home"]["Div151"]);
const Div151IoProps = useIoStore((state)=>state["Home"]["Div151"]);
const Div151Cb = useDiv151Cb()
const Div153Props = useStore((state)=>state["Home"]["Div153"]);
const Div153IoProps = useIoStore((state)=>state["Home"]["Div153"]);
const Div153Cb = useDiv153Cb()
const Div154Props = useStore((state)=>state["Home"]["Div154"]);
const Div154IoProps = useIoStore((state)=>state["Home"]["Div154"]);
const Div154Cb = useDiv154Cb()
const Div155Props = useStore((state)=>state["Home"]["Div155"]);
const Div155IoProps = useIoStore((state)=>state["Home"]["Div155"]);
const Div155Cb = useDiv155Cb()
const Div156Props = useStore((state)=>state["Home"]["Div156"]);
const Div156IoProps = useIoStore((state)=>state["Home"]["Div156"]);
const Div156Cb = useDiv156Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex150Props = useStore((state)=>state["Home"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["Home"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex152Props = useStore((state)=>state["Home"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["Home"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Div165Props = useStore((state)=>state["Home"]["Div165"]);
const Div165IoProps = useIoStore((state)=>state["Home"]["Div165"]);
const Div165Cb = useDiv165Cb()
const Flex145Props = useStore((state)=>state["Home"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["Home"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Div166Props = useStore((state)=>state["Home"]["Div166"]);
const Div166IoProps = useIoStore((state)=>state["Home"]["Div166"]);
const Div166Cb = useDiv166Cb()
const Div167Props = useStore((state)=>state["Home"]["Div167"]);
const Div167IoProps = useIoStore((state)=>state["Home"]["Div167"]);
const Div167Cb = useDiv167Cb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Div168Props = useStore((state)=>state["Home"]["Div168"]);
const Div168IoProps = useIoStore((state)=>state["Home"]["Div168"]);
const Div168Cb = useDiv168Cb()
const Div169Props = useStore((state)=>state["Home"]["Div169"]);
const Div169IoProps = useIoStore((state)=>state["Home"]["Div169"]);
const Div169Cb = useDiv169Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Button25Props = useStore((state)=>state["Home"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["Home"]["Button25"]);
const Button25Cb = useButton25Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Button19Props = useStore((state)=>state["Home"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Home"]["Button19"]);
const Button19Cb = useButton19Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Button20Props = useStore((state)=>state["Home"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["Home"]["Button20"]);
const Button20Cb = useButton20Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Button21Props = useStore((state)=>state["Home"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Home"]["Button21"]);
const Button21Cb = useButton21Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Button22Props = useStore((state)=>state["Home"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Home"]["Button22"]);
const Button22Cb = useButton22Cb()
const Button23Props = useStore((state)=>state["Home"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["Home"]["Button23"]);
const Button23Cb = useButton23Cb()
const Button24Props = useStore((state)=>state["Home"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["Home"]["Button24"]);
const Button24Cb = useButton24Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Button31Props = useStore((state)=>state["Home"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["Home"]["Button31"]);
const Button31Cb = useButton31Cb()
const Button32Props = useStore((state)=>state["Home"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["Home"]["Button32"]);
const Button32Cb = useButton32Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Button35Props = useStore((state)=>state["Home"]["Button35"]);
const Button35IoProps = useIoStore((state)=>state["Home"]["Button35"]);
const Button35Cb = useButton35Cb()
const Button36Props = useStore((state)=>state["Home"]["Button36"]);
const Button36IoProps = useIoStore((state)=>state["Home"]["Button36"]);
const Button36Cb = useButton36Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const Image83Props = useStore((state)=>state["Home"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["Home"]["Image83"]);
const Image83Cb = useImage83Cb()
const TextBox213Props = useStore((state)=>state["Home"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["Home"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Home"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox216Props = useStore((state)=>state["Home"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Home"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const Image84Props = useStore((state)=>state["Home"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["Home"]["Image84"]);
const Image84Cb = useImage84Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const Input2Props = useStore((state)=>state["Home"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Home"]["Input2"]);
const Input2Cb = useInput2Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Input18Props = useStore((state)=>state["Home"]["Input18"]);
const Input18IoProps = useIoStore((state)=>state["Home"]["Input18"]);
const Input18Cb = useInput18Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Input20Props = useStore((state)=>state["Home"]["Input20"]);
const Input20IoProps = useIoStore((state)=>state["Home"]["Input20"]);
const Input20Cb = useInput20Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const Input19Props = useStore((state)=>state["Home"]["Input19"]);
const Input19IoProps = useIoStore((state)=>state["Home"]["Input19"]);
const Input19Cb = useInput19Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const Input21Props = useStore((state)=>state["Home"]["Input21"]);
const Input21IoProps = useIoStore((state)=>state["Home"]["Input21"]);
const Input21Cb = useInput21Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Input22Props = useStore((state)=>state["Home"]["Input22"]);
const Input22IoProps = useIoStore((state)=>state["Home"]["Input22"]);
const Input22Cb = useInput22Cb()
const Button38Props = useStore((state)=>state["Home"]["Button38"]);
const Button38IoProps = useIoStore((state)=>state["Home"]["Button38"]);
const Button38Cb = useButton38Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const Input25Props = useStore((state)=>state["Home"]["Input25"]);
const Input25IoProps = useIoStore((state)=>state["Home"]["Input25"]);
const Input25Cb = useInput25Cb()
const Button39Props = useStore((state)=>state["Home"]["Button39"]);
const Button39IoProps = useIoStore((state)=>state["Home"]["Button39"]);
const Button39Cb = useButton39Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const Image72Props = useStore((state)=>state["Home"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Home"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const Image73Props = useStore((state)=>state["Home"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["Home"]["Image73"]);
const Image73Cb = useImage73Cb()
const Image75Props = useStore((state)=>state["Home"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Home"]["Image75"]);
const Image75Cb = useImage75Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const Image78Props = useStore((state)=>state["Home"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox197Props = useStore((state)=>state["Home"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Home"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["Home"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Home"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["Home"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Home"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["Home"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Home"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox203Props = useStore((state)=>state["Home"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["Home"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["Home"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Home"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox205Props = useStore((state)=>state["Home"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["Home"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox206Props = useStore((state)=>state["Home"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["Home"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox207Props = useStore((state)=>state["Home"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["Home"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const TextBox208Props = useStore((state)=>state["Home"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Home"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const TextBox209Props = useStore((state)=>state["Home"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox210Props = useStore((state)=>state["Home"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Home"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox211Props = useStore((state)=>state["Home"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Home"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["Home"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Home"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image79Props = useStore((state)=>state["Home"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Home"]["Image79"]);
const Image79Cb = useImage79Cb()
const Image80Props = useStore((state)=>state["Home"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["Home"]["Image80"]);
const Image80Cb = useImage80Cb()
const Image81Props = useStore((state)=>state["Home"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["Home"]["Image81"]);
const Image81Cb = useImage81Cb()
const Image82Props = useStore((state)=>state["Home"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["Home"]["Image82"]);
const Image82Cb = useImage82Cb()

  return (<>
  <Flex className="p-Home Navbar bpt" {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Flex className="p-Home Nav_left bpt" {...Nav_leftProps} {...Nav_leftCb} {...Nav_leftIoProps}>
<Flex className="p-Home Flex_left_img bpt" {...Flex_left_imgProps} {...Flex_left_imgCb} {...Flex_left_imgIoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
<Flex className="p-Home Flex_left_menu bpt" {...Flex_left_menuProps} {...Flex_left_menuCb} {...Flex_left_menuIoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Nav_right bpt" {...Nav_rightProps} {...Nav_rightCb} {...Nav_rightIoProps}>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Hero_Section bpt" {...Hero_SectionProps} {...Hero_SectionCb} {...Hero_SectionIoProps}>
<Flex className="p-Home Flex_hero_left bpt" {...Flex_hero_leftProps} {...Flex_hero_leftCb} {...Flex_hero_leftIoProps}>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Div className="p-Home Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Div>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex_hero_r bpt" {...Flex_hero_rProps} {...Flex_hero_rCb} {...Flex_hero_rIoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Favorite_Apps bpt" {...Favorite_AppsProps} {...Favorite_AppsCb} {...Favorite_AppsIoProps}>
<Div className="p-Home Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Div>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Category bpt" {...CategoryProps} {...CategoryCb} {...CategoryIoProps}>
<Div className="p-Home Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Div>
<Flex className="p-Home Card_Cont bpt" {...Card_ContProps} {...Card_ContCb} {...Card_ContIoProps}>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Flex>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Flex>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home About_Us bpt" {...About_UsProps} {...About_UsCb} {...About_UsIoProps}>
<Flex className="p-Home Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Flex className="p-Home About_left bpt" {...About_leftProps} {...About_leftCb} {...About_leftIoProps}>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Div>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home About_Rht bpt" {...About_RhtProps} {...About_RhtCb} {...About_RhtIoProps}>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Menu bpt" {...MenuProps} {...MenuCb} {...MenuIoProps}>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Div>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Div>
<Flex className="p-Home cont1 bpt" {...cont1Props} {...cont1Cb} {...cont1IoProps}>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Button className="p-Home Button25 bpt" {...Button25Props} {...Button25Cb} {...Button25IoProps}/>
</Div>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Div>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Div className="p-Home Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
</Div>
<Div className="p-Home Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Div>
<Div className="p-Home Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Div className="p-Home Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<Button className="p-Home Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Div>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Div>
<Div className="p-Home Div23 bpt" {...Div23Props} {...Div23Cb} {...Div23IoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Div className="p-Home Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Div>
<Div className="p-Home Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Div>
<Div className="p-Home Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home cont2 bpt" {...cont2Props} {...cont2Cb} {...cont2IoProps}>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Div className="p-Home Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Button className="p-Home Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
</Div>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Div>
<Div className="p-Home Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Div className="p-Home Div39 bpt" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Button className="p-Home Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
</Div>
<Div className="p-Home Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Div>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<Button className="p-Home Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Div>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Div>
<Div className="p-Home Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Div className="p-Home Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<Button className="p-Home Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
</Div>
<Div className="p-Home Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Div>
<Div className="p-Home Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Button className="p-Home Button23 bpt" {...Button23Props} {...Button23Cb} {...Button23IoProps}/>
<Button className="p-Home Button24 bpt" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Section_Cta bpt" {...Section_CtaProps} {...Section_CtaCb} {...Section_CtaIoProps}>
<Flex className="p-Home left bpt" {...leftProps} {...leftCb} {...leftIoProps}>
<Flex className="p-Home Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Div className="p-Home Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Div>
<Div className="p-Home Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Div>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Button className="p-Home Button31 bpt" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
<Button className="p-Home Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home right bpt" {...rightProps} {...rightCb} {...rightIoProps}>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Testimonials bpt" {...TestimonialsProps} {...TestimonialsCb} {...TestimonialsIoProps}>
<Div className="p-Home Div56 bpt" {...Div56Props} {...Div56Cb} {...Div56IoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Div>
<Div className="p-Home Div57 bpt" {...Div57Props} {...Div57Cb} {...Div57IoProps}>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Div>
<Div className="p-Home Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Div>
<Flex className="p-Home Flex_Cont bpt" {...Flex_ContProps} {...Flex_ContCb} {...Flex_ContIoProps}>
<Div className="p-Home Div59 bpt" {...Div59Props} {...Div59Cb} {...Div59IoProps}>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Div>
<Flex className="p-Home FlexCont bpt" {...FlexContProps} {...FlexContCb} {...FlexContIoProps}>
<Flex className="p-Home Flexsta bpt" {...FlexstaProps} {...FlexstaCb} {...FlexstaIoProps}>
<Div className="p-Home Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Div>
</Flex>
<Div className="p-Home Div70 bpt" {...Div70Props} {...Div70Cb} {...Div70IoProps}>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Div>
<Div className="p-Home Div71 bpt" {...Div71Props} {...Div71Cb} {...Div71IoProps}>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Div>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Div className="p-Home Div72 bpt" {...Div72Props} {...Div72Cb} {...Div72IoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Div>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Div className="p-Home Div73 bpt" {...Div73Props} {...Div73Cb} {...Div73IoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Div>
<Div className="p-Home Div74 bpt" {...Div74Props} {...Div74Cb} {...Div74IoProps}>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Button className="p-Home Button35 bpt" {...Button35Props} {...Button35Cb} {...Button35IoProps}/>
<Button className="p-Home Button36 bpt" {...Button36Props} {...Button36Cb} {...Button36IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Articles bpt" {...ArticlesProps} {...ArticlesCb} {...ArticlesIoProps}>
<Flex className="p-Home flleft bpt" {...flleftProps} {...flleftCb} {...flleftIoProps}>
<Div className="p-Home Div75 bpt" {...Div75Props} {...Div75Cb} {...Div75IoProps}>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Div>
<Div className="p-Home Div179 bpt" {...Div179Props} {...Div179Cb} {...Div179IoProps}>
<Div className="p-Home Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Div>
<Div className="p-Home Div77 bpt" {...Div77Props} {...Div77Cb} {...Div77IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Div>
<Div className="p-Home Div78 bpt" {...Div78Props} {...Div78Cb} {...Div78IoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Div>
<Div className="p-Home Div79 bpt" {...Div79Props} {...Div79Cb} {...Div79IoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Div>
</Div>
</Flex>
<Flex className="p-Home flright bpt" {...flrightProps} {...flrightCb} {...flrightIoProps}>
<Div className="p-Home Div85 bpt" {...Div85Props} {...Div85Cb} {...Div85IoProps}>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
</Div>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Div className="p-Home Div93 bpt" {...Div93Props} {...Div93Cb} {...Div93IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Div>
<Div className="p-Home Div94 bpt" {...Div94Props} {...Div94Cb} {...Div94IoProps}>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Div>
<Div className="p-Home Div95 bpt" {...Div95Props} {...Div95Cb} {...Div95IoProps}>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Div className="p-Home Div98 bpt" {...Div98Props} {...Div98Cb} {...Div98IoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Div>
<Div className="p-Home Div97 bpt" {...Div97Props} {...Div97Cb} {...Div97IoProps}>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Div>
<Div className="p-Home Div96 bpt" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<Flex className="p-Home Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<Div className="p-Home Div178 bpt" {...Div178Props} {...Div178Cb} {...Div178IoProps}>
<Image className="p-Home Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
</Div>
<Div className="p-Home Div177 bpt" {...Div177Props} {...Div177Cb} {...Div177IoProps}>
<TextBox className="p-Home TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
</Div>
<Div className="p-Home Div176 bpt" {...Div176Props} {...Div176Cb} {...Div176IoProps}>
<TextBox className="p-Home TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Div className="p-Home Div173 bpt" {...Div173Props} {...Div173Cb} {...Div173IoProps}>
<Image className="p-Home Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
</Div>
<Div className="p-Home Div174 bpt" {...Div174Props} {...Div174Cb} {...Div174IoProps}>
<TextBox className="p-Home TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
</Div>
<Div className="p-Home Div175 bpt" {...Div175Props} {...Div175Cb} {...Div175IoProps}>
<TextBox className="p-Home TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Contact bpt" {...ContactProps} {...ContactCb} {...ContactIoProps}>
<Flex className="p-Home LeftCo bpt" {...LeftCoProps} {...LeftCoCb} {...LeftCoIoProps}>
<Div className="p-Home Div100 bpt" {...Div100Props} {...Div100Cb} {...Div100IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Div>
<Div className="p-Home Div101 bpt" {...Div101Props} {...Div101Cb} {...Div101IoProps}>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
</Div>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Div className="p-Home Div106 bpt" {...Div106Props} {...Div106Cb} {...Div106IoProps}>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
</Div>
<Div className="p-Home Div107 bpt" {...Div107Props} {...Div107Cb} {...Div107IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Div className="p-Home Div109 bpt" {...Div109Props} {...Div109Cb} {...Div109IoProps}>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
</Div>
<Div className="p-Home Div108 bpt" {...Div108Props} {...Div108Cb} {...Div108IoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Div className="p-Home Div111 bpt" {...Div111Props} {...Div111Cb} {...Div111IoProps}>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Div>
<Div className="p-Home Div110 bpt" {...Div110Props} {...Div110Cb} {...Div110IoProps}>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home RightCo bpt" {...RightCoProps} {...RightCoCb} {...RightCoIoProps}>
<Flex className="p-Home rgtmain bpt" {...rgtmainProps} {...rgtmainCb} {...rgtmainIoProps}>
<Flex className="p-Home contri bpt" {...contriProps} {...contriCb} {...contriIoProps}>
<Div className="p-Home Div114 bpt" {...Div114Props} {...Div114Cb} {...Div114IoProps}>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<Input className="p-Home Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Div>
<Div className="p-Home Div115 bpt" {...Div115Props} {...Div115Cb} {...Div115IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<Input className="p-Home Input18 bpt" {...Input18Props} {...Input18Cb} {...Input18IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Div className="p-Home Div125 bpt" {...Div125Props} {...Div125Cb} {...Div125IoProps}>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<Input className="p-Home Input19 bpt" {...Input19Props} {...Input19Cb} {...Input19IoProps}/>
</Div>
<Div className="p-Home Div124 bpt" {...Div124Props} {...Div124Cb} {...Div124IoProps}>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<Input className="p-Home Input20 bpt" {...Input20Props} {...Input20Cb} {...Input20IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Div className="p-Home Div128 bpt" {...Div128Props} {...Div128Cb} {...Div128IoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<Input className="p-Home Input21 bpt" {...Input21Props} {...Input21Cb} {...Input21IoProps}/>
</Div>
<Div className="p-Home Div129 bpt" {...Div129Props} {...Div129Cb} {...Div129IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<Input className="p-Home Input22 bpt" {...Input22Props} {...Input22Cb} {...Input22IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Div className="p-Home Div131 bpt" {...Div131Props} {...Div131Cb} {...Div131IoProps}>
<Div className="p-Home Div138 bpt" {...Div138Props} {...Div138Cb} {...Div138IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<Input className="p-Home Input25 bpt" {...Input25Props} {...Input25Cb} {...Input25IoProps}/>
</Div>
</Div>
</Flex>
<Div className="p-Home Div134 bpt" {...Div134Props} {...Div134Cb} {...Div134IoProps}>
<Button className="p-Home Button38 bpt" {...Button38Props} {...Button38Cb} {...Button38IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Socials bpt" {...SocialsProps} {...SocialsCb} {...SocialsIoProps}>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Div className="p-Home Div139 bpt" {...Div139Props} {...Div139Cb} {...Div139IoProps}>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
</Div>
<Button className="p-Home Button39 bpt" {...Button39Props} {...Button39Cb} {...Button39IoProps}/>
</Flex>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Div className="p-Home Div140 bpt" {...Div140Props} {...Div140Cb} {...Div140IoProps}>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Div>
<Div className="p-Home Div141 bpt" {...Div141Props} {...Div141Cb} {...Div141IoProps}>
<Image className="p-Home Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Div>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Div className="p-Home Div147 bpt" {...Div147Props} {...Div147Cb} {...Div147IoProps}>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
</Div>
<Div className="p-Home Div146 bpt" {...Div146Props} {...Div146Cb} {...Div146IoProps}>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Div className="p-Home Div143 bpt" {...Div143Props} {...Div143Cb} {...Div143IoProps}>
<Image className="p-Home Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
</Div>
<Div className="p-Home Div142 bpt" {...Div142Props} {...Div142Cb} {...Div142IoProps}>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Div className="p-Home Div148 bpt" {...Div148Props} {...Div148Cb} {...Div148IoProps}>
<Image className="p-Home Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
</Div>
</Flex>
<Div className="p-Home Div150 bpt" {...Div150Props} {...Div150Cb} {...Div150IoProps}>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Div>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Div className="p-Home Div151 bpt" {...Div151Props} {...Div151Cb} {...Div151IoProps}>
<Image className="p-Home Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
</Div>
<Div className="p-Home Div153 bpt" {...Div153Props} {...Div153Cb} {...Div153IoProps}>
<Image className="p-Home Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Div>
<Div className="p-Home Div154 bpt" {...Div154Props} {...Div154Cb} {...Div154IoProps}>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Div>
<Div className="p-Home Div155 bpt" {...Div155Props} {...Div155Cb} {...Div155IoProps}>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
</Div>
<Div className="p-Home Div156 bpt" {...Div156Props} {...Div156Cb} {...Div156IoProps}>
<Image className="p-Home Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Flex className="p-Home Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<TextBox className="p-Home TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<TextBox className="p-Home TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox className="p-Home TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
<TextBox className="p-Home TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox className="p-Home TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox className="p-Home TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox className="p-Home TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
<TextBox className="p-Home TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
</Flex>
<Flex className="p-Home Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<TextBox className="p-Home TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox className="p-Home TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
<TextBox className="p-Home TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
<TextBox className="p-Home TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<TextBox className="p-Home TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<TextBox className="p-Home TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
<TextBox className="p-Home TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox className="p-Home TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Div className="p-Home Div165 bpt" {...Div165Props} {...Div165Cb} {...Div165IoProps}>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Div>
<Flex className="p-Home Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Div className="p-Home Div166 bpt" {...Div166Props} {...Div166Cb} {...Div166IoProps}>
<Image className="p-Home Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
</Div>
<Div className="p-Home Div167 bpt" {...Div167Props} {...Div167Cb} {...Div167IoProps}>
<Image className="p-Home Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Div className="p-Home Div168 bpt" {...Div168Props} {...Div168Cb} {...Div168IoProps}>
<Image className="p-Home Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
</Div>
<Div className="p-Home Div169 bpt" {...Div169Props} {...Div169Cb} {...Div169IoProps}>
<Image className="p-Home Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
  </>);
}
