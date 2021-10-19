import React from 'react';

import { 
  Container,
  PreviewModal,
  MiniModal,
  ButtonControls,
  PlayIcon,
  PlusIcon,
  LikeIcon,
  DislikeIcon,
  ChevronDownIcon,
  VideoMetadata,
  TagList
} from './styles';

import { useWindowDimensions } from '../../utils/appUtil';

import { FormatedMovieProps } from '../../context/MovieContext';

interface MovieCardProps extends FormatedMovieProps {
  isPoster?: boolean;
};

const MovieCard: React.FC<MovieCardProps> = ({
  backdrop_path_w1280_url,
  poster_path_w1280_url,
  isPoster,
  rating,
  first_air_year,
  genres
}) => {
  const { windowWidth } = useWindowDimensions();

  const isMobileCard = windowWidth < 800;

  const movieCardImage = isMobileCard || isPoster
    ? poster_path_w1280_url
    : backdrop_path_w1280_url;

  return (
    <Container 
      className={`
        ${isPoster ? 'poster-movie' : ''}
        ${isMobileCard ? 'mobile-card' : ''}
      `}
    >
      <PreviewModal 
        className="preview-modal"
        imageUrl={movieCardImage}
      />

      <MiniModal className="mini-modal">

        <ButtonControls>
          <div>
            <button className="play-button">
              <PlayIcon />
            </button>
          </div>

          <div className="tooltip-top">
            <span>Adicionar à minha lista</span>
            
            <button>
              <PlusIcon />
            </button>
          </div>

          <div className="tooltip-top">
            <span>Gostei</span>

            <button>
              <LikeIcon />
            </button>
          </div>

          <div className="tooltip-top">
            <span>Não é para mim</span>

            <button>
              <DislikeIcon />
            </button>
          </div>

          <div className="tooltip-top">
            <span>Mais informações</span>

            <button className="more-info-button">
              <ChevronDownIcon />
            </button>
          </div>
        </ButtonControls>

        <VideoMetadata>
          <span>
            <strong>{rating} relevante</strong>
          </span>

          <span>{first_air_year}</span>

          <span>{/*featuredMovie.seasons*/}03 Temporadas</span>

          <span className="feature-badge">HD</span>
        </VideoMetadata>

        <TagList>
          {
            genres.map((genre, index) => (
              <div key={index}>
                {index !== 0 && <span className="separator" />}

                <span>{genre?.name}</span>
              </div>
            ))
          }
        </TagList>

      </MiniModal>
    </Container>
  );
}

export default MovieCard;
