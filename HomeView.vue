<template>
  <v-app :theme="isDark ? 'dark' : 'light'">
    <!-- Left Sidebar -->
    <v-navigation-drawer app permanent color="indigo" dark>
      <v-list>
        <v-list-item>
          <v-list-item-icon><v-icon>mdi-fingerprint</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-h6 font-weight-bold">FaculTrack</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in navItems" :key="item.title" link>
          <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <v-switch v-model="isDark" label="Toggle Dark Mode" class="mb-4"></v-switch>

        <v-row>
          <v-col cols="12" sm="6" md="3" v-for="metric in stats" :key="metric.title">
            <v-card :color="metric.color" dark class="pa-4">
              <v-icon large>{{ metric.icon }}</v-icon>
              <div class="mt-2 text-h6">{{ metric.title }}</div>
              <div class="text-h4 font-weight-bold">{{ metric.value }}</div>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Current Presence</v-card-title>
              <v-data-table :headers="presentHeaders" :items="presentFaculty" dense>
                <template v-slot:item.status="{ item }">
                  <v-chip :color="item.status === 'Inside' ? 'green' : 'red'" dark>{{ item.status }}</v-chip>
                </template>
              </v-data-table>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Recent Logs</v-card-title>
              <v-data-table :headers="logHeaders" :items="recentLogs" dense></v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isDark: false,
      navItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Faculty List', icon: 'mdi-account-tie' },
        { title: 'Presence Logs', icon: 'mdi-history' },
        { title: 'Settings', icon: 'mdi-cog' }
      ],
      stats: [
        { title: 'Total Faculty', value: 6, icon: 'mdi-account-tie', color: 'blue' },
        { title: 'Present Now', value: 3, icon: 'mdi-door-open', color: 'green' },
        { title: 'RFID Scans Today', value: 10, icon: 'mdi-rfid', color: 'teal' },
        { title: 'Fingerprint Scans Today', value: 5, icon: 'mdi-fingerprint', color: 'deep-purple' }
      ],
      presentHeaders: [
        { text: 'ID', value: 'id' },
        { text: 'Faculty Name', value: 'name' },
        { text: 'Status', value: 'status' },
        { text: 'Last Entry', value: 'time' }
      ],
      presentFaculty: [
        { id: 1, name: 'Ma\'am Binay', status: 'Inside', time: '09:15 AM' },
        { id: 2, name: 'Ma\'am Lainez', status: 'Outside', time: 'N/A' },
        { id: 3, name: 'Sir De Guzman', status: 'Inside', time: '08:30 AM' },
        { id: 4, name: 'Sir Cabrera', status: 'Outside', time: 'N/A' },
        { id: 5, name: 'Sir Rodriguez', status: 'Inside', time: '09:00 AM' },
        { id: 6, name: 'Sir Magnaye', status: 'Outside', time: 'N/A' }
      ],
      logHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Action', value: 'action' },
        { text: 'Time', value: 'timestamp' }
      ],
      recentLogs: [
        { name: 'Ma\'am Binay', action: 'Entered', timestamp: '09:15 AM' },
        { name: 'Sir De Guzman', action: 'Entered', timestamp: '08:30 AM' },
        { name: 'Sir Rodriguez', action: 'Entered', timestamp: '09:00 AM' }
      ]
    }
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 20px;
}
</style>