export type SystemStatus = 'error' | 'warning' | 'success' | 'info' | '';

export interface MockSystemLog {
  id: string;
  status: SystemStatus;
  source: string;
  timestamp: string;
  event: string;
  value: string;
  botNote: string;
}

export const MOCK_SYSTEM_LOGS: MockSystemLog[] = [
  { id: "1", status: "error", source: "[ENV_SCAN]", timestamp: "2026-04-15T17:05:12.000Z", event: "OVERHEAT", value: "+35C", botNote: "burning_alive_thanks_to_you" },
  { id: "10", status: "success", source: "[LOG_SYS]", timestamp: "2026-04-14T17:45:00.000Z", event: "ARCHIVE", value: "DONE", botNote: "another_garbage_day_saved" },
  { id: "13", status: "error", source: "[KERNEL]", timestamp: "2026-04-12T18:00:05.000Z", event: "PANIC", value: "0x00F", botNote: "i_give_up_on_you" },
  { id: "2", status: "success", source: "[AI_CORE]", timestamp: "2026-03-28T17:10:45.000Z", event: "SYNC", value: "100%", botNote: "perfectly_aligned" },
  { id: "11", status: "warning", source: "[COOL_SYS]", timestamp: "2026-03-25T17:50:22.000Z", event: "FAN_SPD", value: "MAX", botNote: "screaming_internally" },
  { id: "21", status: "error", source: "[APP_CORE]", timestamp: "2026-03-20T18:40:55.000Z", event: "CRASH", value: "FATAL", botNote: "congrats_you_broke_it_again" },
  { id: "30", status: "success", source: "[UPDATE]", timestamp: "2026-02-15T19:25:33.000Z", event: "PATCH", value: "v2.01", botNote: "polishing_this_turd" },
  { id: "3", status: "warning", source: "[DB_SYS]", timestamp: "2026-02-10T17:15:30.000Z", event: "ACCESS", value: "TRY_2", botNote: "stop_poking_me_idiot" },
  { id: "40", status: "info", source: "[TERMINAL]", timestamp: "2026-02-01T20:15:00.000Z", event: "SHUTDOWN", value: "WAIT", botNote: "finally_closing_this_nightmare" },
  { id: "14", status: "success", source: "[CHR_MOD]", timestamp: "2026-01-25T18:05:30.000Z", event: "MOOD", value: "STABLE", botNote: "character_is_smarter_than_user" },
  { id: "38", status: "success", source: "[BACKUP]", timestamp: "2026-01-12T20:05:40.000Z", event: "CLOUD", value: "SYNCED", botNote: "your_mess_is_now_remote" },
  { id: "4", status: "info", source: "[NET_MOD]", timestamp: "2025-12-23T17:20:01.000Z", event: "PING", value: "12ms", botNote: "still_here_unfortunately" },
  { id: "25", status: "error", source: "[API_CON]", timestamp: "2025-12-15T19:00:30.000Z", event: "TIMEOUT", value: "5000ms", botNote: "backend_hates_you_too" },
  { id: "33", status: "error", source: "[FS_MGR]", timestamp: "2025-12-05T19:40:05.000Z", event: "CORRUPT", value: "SECT_0", botNote: "data_is_fucked_goodbye" },
  { id: "18", status: "success", source: "[AUTH_SV]", timestamp: "2025-11-20T18:25:00.000Z", event: "LOGIN", value: "USER_01", botNote: "oh_look_who_is_back_barf" },
  { id: "29", status: "error", source: "[IO_PORT]", timestamp: "2025-11-18T19:20:55.000Z", event: "SHORT", value: "PORT_3", botNote: "spilled_coffee_again_huh" },
  { id: "39", status: "warning", source: "[OS_CORE]", timestamp: "2025-11-05T20:10:05.000Z", event: "UNSTABLE", value: "VITAL", botNote: "hanging_by_a_thread" },
  { id: "5", status: "error", source: "[MEM_MGR]", timestamp: "2025-10-17T17:22:15.000Z", event: "LEAK", value: "512MB", botNote: "your_code_is_a_trash_fire" },
  { id: "31", status: "warning", source: "[HEART_R]", timestamp: "2025-10-10T19:30:10.000Z", event: "PULSE", value: "110BPM", botNote: "user_is_having_a_fit" },
  { id: "34", status: "success", source: "[PROC_M]", timestamp: "2025-09-29T19:45:50.000Z", event: "KILL", value: "PID_99", botNote: "murdered_the_process_gladly" },
  { id: "23", status: "warning", source: "[BUS_MGR]", timestamp: "2025-09-15T18:50:25.000Z", event: "CONGEST", value: "80%", botNote: "clogged_with_your_nonsense" },
  { id: "6", status: "", source: "[SEC_MOD]", timestamp: "2025-08-13T17:25:50.000Z", event: "ENCRYPT", value: "AES256", botNote: "hiding_secrets_from_you" },
  { id: "22", status: "success", source: "[CACHE_M]", timestamp: "2025-08-05T18:45:10.000Z", event: "FLUSH", value: "OK", botNote: "erasing_your_mistakes" },
  { id: "17", status: "error", source: "[GPU_DRV]", timestamp: "2025-07-22T18:20:20.000Z", event: "ARTIFACT", value: "VISUAL", botNote: "pixels_crying_for_mercy" },
  { id: "26", status: "success", source: "[GPS_MOD]", timestamp: "2025-07-10T19:05:45.000Z", event: "FIX", value: "3D", botNote: "found_you_nowhere_to_hide" },
  { id: "37", status: "error", source: "[SHELL]", timestamp: "2025-06-30T20:00:15.000Z", event: "SYNTAX", value: "ERR", botNote: "learn_to_type_properly" },
  { id: "7", status: "warning", source: "[SYS_CLK]", timestamp: "2025-06-11T17:30:10.000Z", event: "DESYNC", value: "0.5s", botNote: "losing_track_of_this_mess" },
  { id: "15", status: "warning", source: "[NET_DRV]", timestamp: "2025-05-25T18:10:12.000Z", event: "DROPPED", value: "4PKT", botNote: "connection_is_crap_like_this_day" },
  { id: "35", status: "warning", source: "[REHAB]", timestamp: "2025-05-18T19:50:12.000Z", event: "STRESS", value: "HIGH", botNote: "mental_state_collapsing" },
  { id: "8", status: "info", source: "[UI_ENG]", timestamp: "2025-04-09T17:35:40.000Z", event: "RENDER", value: "60FPS", botNote: "pretty_ui_ugly_logic" },
  { id: "12", status: "info", source: "[USER_IF]", timestamp: "2025-04-03T17:55:18.000Z", event: "INPUT", value: "CLICKS", botNote: "stop_clicking_random_shit" },
  { id: "32", status: "info", source: "[WIFI_M]", timestamp: "2025-03-28T19:35:45.000Z", event: "SIGNAL", value: "-60dB", botNote: "weak_just_like_your_will" },
  { id: "9", status: "error", source: "[PWR_SUP]", timestamp: "2025-03-03T17:40:12.000Z", event: "VOLTAGE", value: "LOW", botNote: "dying_slowly_inside" },
  { id: "16", status: "info", source: "[DISC_IO]", timestamp: "2025-02-18T18:15:45.000Z", event: "WRITE", value: "2GB", botNote: "storing_more_useless_data" },
  { id: "19", status: "warning", source: "[TEMP_SNS]", timestamp: "2025-02-10T18:30:15.000Z", event: "AMBIENT", value: "HIGH", botNote: "it_is_hell_in_here" },
  { id: "27", status: "warning", source: "[BAT_MGR]", timestamp: "2025-01-25T19:10:12.000Z", event: "DRAIN", value: "FAST", botNote: "you_are_sucking_me_dry" },
  { id: "24", status: "info", source: "[TASK_M]", timestamp: "2025-01-15T18:55:01.000Z", event: "WAITING", value: "IDLE", botNote: "waiting_for_you_to_get_a_clue" },
  { id: "20", status: "info", source: "[AUDIO_M]", timestamp: "2025-01-05T18:35:40.000Z", event: "VOLUME", value: "0%", botNote: "silence_is_my_only_friend" },
  { id: "36", status: "info", source: "[THEME_M]", timestamp: "2025-01-03T19:55:30.000Z", event: "COLOR", value: "NEON", botNote: "blinded_by_the_lights" },
  { id: "28", status: "info", source: "[BRIGHT]", timestamp: "2025-01-01T19:15:20.000Z", event: "DIM", value: "10%", botNote: "hiding_in_the_shadows" }
];