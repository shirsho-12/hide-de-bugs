// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { console } from "inspector/promises";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hide-de-bugs" is now active!');
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const doc = editor.document;
    const fullText = doc.getText();
    console.log("Full document text:", fullText);
  }

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "hide-de-bugs.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from Hide De-bugs!");
    }
  );

  context.subscriptions.push(disposable);

  const startsWithHash = (label: string) => label.trim().startsWith("#");
}

// This method is called when your extension is deactivated
export function deactivate() {}
