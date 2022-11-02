/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Note } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Icon, TextField } from "@aws-amplify/ui-react";
export default function CreateNote(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeOneSixZeroTwoFourEightFiveValue,
    setTextFieldThreeOneSixZeroTwoFourEightFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixZeroTwoFourEightSixValue,
    setTextFieldThreeOneSixZeroTwoFourEightSixValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      title: textFieldThreeOneSixZeroTwoFourEightFiveValue,
      text: textFieldThreeOneSixZeroTwoFourEightSixValue,
    },
    model: Note,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreateNote")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="5px 5px 5px 5px"
          {...getOverrideProps(overrides, "MyIcon")}
        >
          <Icon
            width="14px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            paths={[
              {
                d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="592px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Title"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeOneSixZeroTwoFourEightFiveValue}
          onChange={(event) => {
            setTextFieldThreeOneSixZeroTwoFourEightFiveValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField31602485")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="592px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Note"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeOneSixZeroTwoFourEightSixValue}
          onChange={(event) => {
            setTextFieldThreeOneSixZeroTwoFourEightSixValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField31602486")}
        ></TextField>
        <Divider
          width="unset"
          height="1px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Button
          display="flex"
          gap="20px"
          direction="row"
          width="unset"
          height="40px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
