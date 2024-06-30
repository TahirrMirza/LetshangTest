import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import styles from "./styles";

const BottomSheetContainer = ({ children }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["70%", "80%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      style={styles.bottomSheetContainer}
    >
      <BottomSheetScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={styles.contentContainer}
      >
        {children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetContainer;
