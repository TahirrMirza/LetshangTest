import VectorIcons from "@/app/components/VectorIcons";
import Typography from "@/app/config/Typography";
import colors from "@/app/config/colors";
import React from "react";
import { View } from "react-native";
import BackgroundImage from "../../components/BackgroundImage";
import BottomSheetContainer from "../../components/BottomSheetContainer";
import Buttons from "../../components/Buttons/index";
import Header from "../../components/Header/index";
import IconWithText from "../../components/IconWithText/index";
import Seperator from "../../components/Seperator/index";
import { navigateTo } from "../../utils/routingUtils";
import styles from "./styles";

const EventDetails = () => {
  const handleBuy = () => {
    navigateTo({ screen: "/screens/Questions" });
  };

  return (
    <BackgroundImage>
      <Header
        dotColor={colors.white}
        iconColor={colors.white}
        textColor={colors.white}
        title="Event"
      />
      <BottomSheetContainer>
        <IconWithText
          title="Art show  🎨"
          description="by Olivia Adams"
          titleFontSize={26}
          titleFontWeight="600"
          descriptionFontSize={16}
          descriptionFontWeight="400"
          descriptionColor={colors.primaryTextColor}
        />
        <Seperator seperate="6%" />
        <IconWithText
          title="Monday, Nov 13 2023"
          description="6:00 PM - 10:00 PM"
          titleFontSize={16}
          titleFontWeight="500"
          descriptionFontSize={12}
          descriptionFontWeight="500"
          leftIcon={<VectorIcons.EntypoIcons name="calendar" size={25} />}
        />
        <Seperator seperate="3%" />
        <IconWithText
          title="Lower Manhattan"
          description="Join to see full address"
          titleFontSize={16}
          descriptionColor={colors.primary}
          titleFontWeight="500"
          descriptionFontSize={12}
          descriptionFontWeight="500"
          leftIcon={
            <VectorIcons.FontistoIcons name="map-marker-alt" size={25} />
          }
        />
        <Seperator seperate="3%" />
        <IconWithText
          title="78/100 tickets left"
          description="100+ invited"
          titleFontSize={16}
          titleFontWeight="500"
          descriptionFontSize={12}
          descriptionFontWeight="500"
          leftIcon={<VectorIcons.FontAwesome6Icons name="ticket" size={25} />}
        />
        <Seperator seperate="3%" />
        <IconWithText
          title="$10.00 - $50.00"
          titleFontSize={16}
          titleFontWeight="500"
          leftIcon={<VectorIcons.FontAwesomeIcons name="dollar" size={25} />}
        />
        <Seperator seperate="5%" />
        <Typography.CommonText fontSize={18} fontWeight="600">
          About this event
        </Typography.CommonText>
        <Seperator seperate="2%" />
        <Typography.CommonText fontSize={16} fontWeight="600">
          Come join me in celebrating my 25th birthday! I can't wait to
          celebrate with all of you, so let's make it a night to remember. See
          you at the party!
        </Typography.CommonText>
        <Seperator seperate="5%" />
        <Typography.CommonText fontSize={18} fontWeight="600">
          Find this event
        </Typography.CommonText>
        <Seperator seperate="2%" />
        <Typography.CommonText fontSize={16} fontWeight="600">
          Come join me in celebrating my 25th birthday! I can't wait to
          celebrate with all of you, so let's make it a night to remember. See
          you at the party!
        </Typography.CommonText>
      </BottomSheetContainer>
      <View style={styles.buttonContainer}>
        <Buttons.Primary onPress={handleBuy} text="Buy Tickets" />
      </View>
    </BackgroundImage>
  );
};

export default EventDetails;
