import { Fragment } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';
import Card from '@organism/Card';

import { Task } from '@/types/tasks';

import LaneHeader from './LaneHeader';

type Lane = {
  title: string;
  cards: Array<Task>;
};

type Props = {
  lanes: Array<Lane>;
  onDelete?: (id: string) => void;
};

const Board = ({ lanes, onDelete }: Props) => {
  return (
    <Grid templateColumns={`repeat(${lanes.length}, minmax(340px, 1fr))`} gap="4">
      {lanes
        .filter((element) => element.cards.length > 0)
        .map((lane, laneIndex) => (
          <Fragment key={lane.title}>
            <GridItem colStart={laneIndex + 1} rowStart={1} rowEnd={2}>
              <LaneHeader title={lane.title} totalCards={lane.cards.length} />
            </GridItem>
            {lane.cards.map(
              (
                { assignee, dueDate, name, pointEstimate, tags, id, status },
                cardIndex,
              ) => (
                <GridItem
                  key={id}
                  colStart={laneIndex + 1}
                  rowStart={cardIndex + 2}
                  rowEnd={cardIndex + 3}
                >
                  <Card
                    onDelete={() => onDelete && onDelete(id)}
                    {...{ assignee, dueDate, name, pointEstimate, tags, status }}
                  />
                </GridItem>
              ),
            )}
          </Fragment>
        ))}
    </Grid>
  );
};

export default Board;
