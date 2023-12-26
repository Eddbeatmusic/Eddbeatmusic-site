import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import PortfolioModal from 'components/modules/PortfolioModal';
import ImageDisplay from 'components/foundation/ImageDisplay';
import { useProjectContext } from 'context/ModalContext';

import PortfolioListGalery from 'constants/PortfolioListGalery';

const PortfolioList = [
  {
    path: 'TheSignOfTheRavenObject',
  },
  {
    path: 'SerenidadObject',
  },
  {
    path: 'RebotObject',
  },
  {
    path: 'PolarityObject',
  },
  {
    path: 'PanaceaObject',
  },
  {
    path: 'FallingStarObject',
  },
  {
    path: 'AlkymObject',
  },
  {
    path: 'AftermathOfBattleObject',
  },
  {
    path: 'MonsterHunterObject',
  },
  {
    path: 'AnnoMutationemObject',
  },
];

const filters = [
  {
    title: 'videogames',
  },
  {
    title: 'sound design',
  },
  {
    title: 'film & animation',
  },
  {
    title: 'all',
  },
];

const Work = () => {
  const [filtered, setFiltered] = useState('all');
  const [open, setOpen] = useState(null);
  const [selection, setSelection] = useState(null);
  const galeryList = PortfolioListGalery || [];
  const { project, setProject } = useProjectContext();

  const handleClick = (e) => {
    const filterby = e.target.innerText.toLowerCase();
    setFiltered(filterby);
  };

  const bringObject = useCallback(async () => {
    const selectedObject = PortfolioList[project];
    const block = await import(`constants/${selectedObject.path}`);
    const dynamicComponent = block.default;
    setSelection(dynamicComponent);
  }, [project]);

  useEffect(() => {
    const project = JSON.parse(localStorage.getItem('project'));
    if (project) {
      setProject(project);
      localStorage.setItem('project', JSON.stringify(null));
    }
  }, []);

  useEffect(() => {
    if (project !== null) {
      bringObject();
      setTimeout(() => {
        setOpen(true);
      }, 500);
    }
  }, [project]);

  useEffect(() => {
    if (open === false) {
      setProject(null);
      setSelection(null);
    }
  }, [open]);

  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        bgcolor="#000"
      >
        <Typography
          sx={{
            fontSize: { sx: '8.2rem', md: '9.2rem' },
            color: '#fff',
            marginTop: '4vw',
            paddingTop: '2vw',
            letterSpacing: '0.3em',
          }}
        >
          PORTFOLIO
        </Typography>
        <Grid
          container
          justifyContent="center"
          width="60vw"
          alignItems="center"
          sx={{ textAlign: 'center', marginBottom: '8vw' }}
        >
          {filters &&
            filters.map((obj, i) => (
              <Grid key={i} item xs={i < 2 ? 3 : i === 2 ? 4 : 2}>
                <Typography
                  className="filter-portfolio"
                  onClick={(e) => handleClick(e)}
                  variant={obj.title === filtered ? 'subtitle2' : 'subtitle3'}
                  sx={{
                    color: `rgba(255,255,255,${
                      obj.title === filtered ? 1 : 0.5
                    })`,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    textDecoration:
                      obj.title === filtered ? 'underline' : 'none',
                    textUnderlineOffset: '0.4em',
                    textDecorationThickness: '1px',
                  }}
                >
                  {obj.title}
                </Typography>
              </Grid>
            ))}
        </Grid>
        <Grid container justifyContent="center" sx={{ marginBottom: '15vw' }}>
          <Grid item xs={10}>
            <ImageDisplay
              images={galeryList}
              filteredText={filtered}
              handleSelection={setProject}
            />
          </Grid>
        </Grid>
      </Box>
      <PortfolioModal
        project={selection}
        open={open}
        handleClose={() => setOpen(false)}
        carouselImages={PortfolioListGalery.filter((obj, index) => index !== 3)}
      />
    </>
  );
};

export default Work;
