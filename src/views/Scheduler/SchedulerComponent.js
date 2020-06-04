import { connectProps } from '@devexpress/dx-react-core';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import {
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
import { CircularProgress, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = theme => ({
  flexibleSpace: {
    margin: `0 auto 0 0`,
  },
  prioritySelector: {
    marginLeft: theme.spacing(2),
    minWidth: 140,
    '@media (max-width: 500px)': {
      minWidth: 0,
      fontSize: `0.75rem`,
      marginLeft: theme.spacing(0.5),
    },
  },
});

const FlexibleSpace = withStyles(styles, {
  name: `FlexibleSpace`,
})(({ classes, priority, priorityChange, ...restProps }) => (
  <Toolbar.FlexibleSpace
    {...restProps}
    className={classes.flexibleSpace}
  ></Toolbar.FlexibleSpace>
));

export default class SChedulerComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      resources: [
        {
          fieldName: `roomId`,
          title: `Room`,
          instances: props?.dataResource,
        },
      ],
      currentViewName: `Day`,
      currentDate: props.data[0]?.startDate.toDateString(),

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
    };
    this.currentViewNameChange = currentViewName => {
      this.setState({ currentViewName });
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
    this.flexibleSpace = connectProps(FlexibleSpace, () => {
      const { currentPriority } = this.state;
      return {
        priority: currentPriority,
        priorityChange: this.priorityChange,
      };
    });
  }

  componentDidUpdate() {
    this.flexibleSpace.update(); //
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
      if (added && !added?.rRule && !added?.allDay) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment.id] &&
          !changed[appointment.id].rRule &&
          !changed[appointment.id].allDay
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

    if (
      data === undefined ||
      resources === undefined ||
      data.length === 0 ||
      resources.length === 0
    )
      return (
        <div>
          <CircularProgress />
        </div>
      );

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
          <WeekView />
          <MonthView />
          <DayView />
          <Toolbar flexibleSpaceComponent={this.flexibleSpace} />
          <ViewSwitcher />
          <DateNavigator />
          <TodayButton />
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
