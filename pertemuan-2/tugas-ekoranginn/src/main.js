let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = "flex justify-between items-center bg-white border-2 border-gray-400 shadow-md rounded-lg p-2 my-2 w-full"; // styling for each task
   task.innerHTML = `
         <p class="text-gray-700 pl-1">${title}</p>
         <div>
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-500  text-black rounded-lg p-1 pr-2  border-2 border-gray-600 mx-1 cursor-pointer hover:bg-green-600 transition duration-300 text-sm font-semibold">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
            class="bg-red-500 text-black rounded-lg p-1 pl-1.5 pr-1.5  border-2 border-gray-600 mx-1 ml-0 cursor-pointer hover:bg-red-600 transition duration-300 text-sm font-semibold">
            </div>
        
         
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}

output.addEventListener('click', function(e) {
   if (e.target && e.target.id === 'btn-hapus') {
      let taskId = e.target.getAttribute('data-task');
      let taskElement = document.getElementById(taskId);
      taskElement.remove();
   }
});