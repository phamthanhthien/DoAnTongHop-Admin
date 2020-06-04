import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import {
  AllDayPanel,
  AppointmentForm,
  Appointments,
  AppointmentTooltip,
  ConfirmationDialog,
  DateNavigator,
  DayView,
  DragDropProvider,
  EditRecurrenceMenu,
  MonthView,
  Resources,
  Scheduler,
  TodayButton,
  Toolbar,
  ViewSwitcher,
  WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  amber,
  deepOrange,
  pink,
  purple,
  teal,
} from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';

const appointments = [
  {
    id: 0,
    title: `Watercolor Landscape`,
    roomId: 1,
    members: [1],
    startDate: new Date(2017, 4, 1, 9, 30),
    endDate: new Date(2017, 4, 1, 11),
  },
  {
    id: 1,
    title: `Oil Painting for Beginners`,
    roomId: 2,
    members: [2],
    startDate: new Date(2017, 4, 1, 9, 30),
    endDate: new Date(2017, 4, 1, 11),
  },
  {
    id: 2,
    title: `Testing`,
    roomId: 3,
    members: [3],
    startDate: new Date(2017, 4, 1, 12, 0),
    endDate: new Date(2017, 4, 1, 13, 0),
  },
  {
    id: 3,
    title: `Meeting of Instructors`,
    roomId: 4,
    members: [4, 1],
    startDate: new Date(2017, 4, 1, 9, 0),
    endDate: new Date(2017, 4, 1, 9, 15),
  },
  {
    id: 4,
    title: `Recruiting students`,
    roomId: 5,
    members: [3, 4, 5],
    startDate: new Date(2017, 4, 26, 10, 0),
    endDate: new Date(2017, 4, 26, 11, 0),
  },
  {
    id: 5,
    title: `Final exams`,
    roomId: 3,
    members: [2, 3],
    startDate: new Date(2017, 4, 26, 12, 0),
    endDate: new Date(2017, 4, 26, 13, 35),
  },
  {
    id: 6,
    title: `Monthly Planning`,
    roomId: 4,
    members: [1, 3],
    startDate: new Date(2017, 4, 26, 14, 30),
    endDate: new Date(2017, 4, 26, 15, 45),
  },
  {
    id: 7,
    title: `Open Day`,
    roomId: 5,
    members: [1, 3, 5],
    startDate: new Date(2017, 4, 1, 9, 30),
    endDate: new Date(2017, 4, 1, 13),
  },
];

const resourcesData = [
  {
    text: `Room 101`,
    id: 1,
    color: amber,
  },
  {
    text: `Room 102`,
    id: 2,
    color: pink,
  },
  {
    text: `Room 103`,
    id: 3,
    color: purple,
  },
  {
    text: `Meeting room`,
    id: 4,
    color: deepOrange,
  },
  {
    text: `Conference hall`,
    id: 5,
    color: teal,
  },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      resources: [
        {
          fieldName: `roomId`,
          title: `Room`,
          instances: resourcesData,
        },
      ],
      currentDate: `2017-05-01`,

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
    };
    this.currentDateChange = currentDate => {
      this.setState({ currentDate });
    };
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointmentId = this.changeEditingAppointmentId.bind(
      this,
    );
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointmentId(editingAppointmentId) {
    this.setState({ editingAppointmentId });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState(state => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment,
        );
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const {
      addedAppointment,
      appointmentChanges,
      currentDate,
      data,
      editingAppointmentId,
      resources,
    } = this.state;

    return (
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          />
          <EditingState
            addedAppointment={addedAppointment}
            appointmentChanges={appointmentChanges}
            editingAppointmentId={editingAppointmentId}
            onAddedAppointmentChange={this.changeAddedAppointment}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            onCommitChanges={this.commitChanges}
            onEditingAppointmentIdChange={this.changeEditingAppointmentId}
          />
          <WeekView endDayHour={17} startDayHour={9} />
          <MonthView />
          <DayView />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <TodayButton />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showDeleteButton showOpenButton />
          <AppointmentForm />
          <Resources data={resources} mainResourceName="roomId" />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}
