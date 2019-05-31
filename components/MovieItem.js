import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: ${props => (!props.big ? "12px" : "14px")};
  margin-vertical: 5px;
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 12px;
  margin-vertical: 10px;
`;

const MovieItem = ({
  id,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false,
  overview,
  isMovie = true,
  navigation
}) =>
  horizontal ? (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate({ routeName: "Detail", params: { isMovie, id } })
      }
    >
      <HContainer>
        <MoviePoster path={posterPhoto} />
        <Column>
          <Title big={true}>{title}</Title>
          <MovieRating votes={voteAvg} />
          {overview ? (
            <Overview>
              {overview.length > 150
                ? `${overview.substring(0, 117)}...`
                : overview}
            </Overview>
          ) : null}
        </Column>
      </HContainer>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate({ routeName: "Detail", params: { isMovie, id } })
      }
    >
      <Container>
        <MoviePoster path={posterPhoto} />
        <Title>
          {title.length > 10 ? `${title.substring(0, 7)}...` : title}
        </Title>
        <MovieRating votes={voteAvg} />
      </Container>
    </TouchableWithoutFeedback>
  );

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string,
  isMovie: PropTypes.bool
};

export default withNavigation(MovieItem);
