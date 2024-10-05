#![feature(stmt_expr_attributes)]
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn promise() -> Result<String, String> {
    eprintln!("Called promise");
    let seconds = std::time::Duration::from_secs(1);
    std::thread::sleep(seconds);
    Ok("Returned data".to_owned())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    #[cfg(debug_assertions)]
    let devtools = tauri_plugin_devtools::init(); // initialize the plugin as early as possible

    let mut builder = tauri::Builder::default();

    #[cfg(debug_assertions)]
    builder = builder.plugin(devtools); // then register it with Tauri

    builder
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, promise])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
