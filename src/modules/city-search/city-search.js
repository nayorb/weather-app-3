import Downshift from "downshift";
import React, { useContext, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { MdLocationSearching } from "react-icons/md";
import { AppContext } from "../../App";
import cities from "../../data/cities";
import {
  LocationInputContainer,
  LocationInputIcon,
  LocationInput,
  LocationInputLocateButton,
  SelectMenu,
  SelectMenuItem
} from "./city-search.styles";

const CitySearch = () => {
  const { changeLocation } = useContext(AppContext);
  const inputRef = useRef();

  const onSelect = (selection) => {
    changeLocation(selection);
  };
  const onSearch = (selection) => {};

  return (
    <Downshift itemToString={(item) => item}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
        clearSelection,
        openMenu,
        closeMenu
      }) => (
        <LocationInputContainer
          {...getRootProps({}, { suppressRefError: true })}
        >
          <LocationInputIcon>
            <BiSearch />
          </LocationInputIcon>
          <LocationInput
            {...getInputProps({
              onFocus: openMenu,
              onBlur: closeMenu,
              ref: inputRef,
              placeholder: "Search for places..."
            })}
          />
          <LocationInputLocateButton onClick={onSearch}>
            <MdLocationSearching />
          </LocationInputLocateButton>
          <SelectMenu {...getMenuProps()} isOpen={isOpen}>
            {isOpen
              ? cities
                  .filter((city) =>
                    city
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .startsWith(
                        inputValue
                          ?.toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                      )
                  )
                  .map((item, index) => (
                    <SelectMenuItem
                      {...getItemProps({
                        key: item,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal"
                        }
                      })}
                      onClick={() => {
                        onSelect(item);
                        clearSelection();
                      }}
                    >
                      {item}
                    </SelectMenuItem>
                  ))
              : null}
          </SelectMenu>
        </LocationInputContainer>
      )}
    </Downshift>
  );
};

export default CitySearch;
