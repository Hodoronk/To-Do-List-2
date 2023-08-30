(()=>{"use strict";const e=e=>{const t=document.createElement("button");return t.textContent=e,t},t=()=>document.createElement("div"),n=e=>{const t=document.createElement("p");return t.textContent=e,t},d=e=>{const t=document.createElement("input");return t.type=e,t},c=[],a={home:e("Home"),week:e("This Week"),today:e("Today"),addTask:e("Add Task")},i={leftDiv:t(),center:t()},r={container:t(),titlePara:n("Name your task: "),titleInput:d("text"),descrPara:n("Describe your task: "),descrInput:d("text"),duePara:n("Set your due date"),dueInput:d("date"),priorityPara:n("Set priority: "),highP:d("checkbox"),medP:d("checkbox"),lowP:d("checkbox"),create:e("Create Task"),cancel:e("Cancel")};t(),n(),n(),n(),n(),e("Mark Complete"),e("Cancel");class o{constructor(e,t,n,d){this.title=e,this.description=t,this.dueDate=n,this.priority=d}}let l;const p=()=>{const e=r.titleInput.value,t=r.descrInput.value,n=r.dueInput.value,d=l,a=new o(e,t,n,d);c.push(a);const p=c.length-1;console.log(c.length),i.center.removeChild(r.container),h(e,t,n,d,p)},h=(e,t,n,d,a)=>{const r=document.createElement("div"),o=document.createElement("p"),l=document.createElement("p"),p=document.createElement("p"),h=document.createElement("p"),s=document.createElement("button");s.textContent="Mark Complete",s.addEventListener("click",(()=>{c.splice(a,1),console.log(c.length),i.center.removeChild(r)})),o.textContent=e,l.textContent=t,p.textContent=n,h.textContent=d,r.appendChild(o),r.appendChild(l),r.appendChild(p),r.appendChild(h),r.appendChild(s),console.log(c),i.center.appendChild(r)},s=()=>{i.center.removeChild(r.container)},u=e=>{r.highP.checked=!1,r.medP.checked=!1,r.lowP.checked=!1};document.body.appendChild(i.leftDiv),document.body.appendChild(i.center),i.leftDiv.appendChild(a.home),i.leftDiv.appendChild(a.today),i.leftDiv.appendChild(a.week),i.leftDiv.appendChild(a.addTask),a.addTask.addEventListener("click",(()=>{i.center.innerHTML="",c.forEach(((e,t)=>{const n=t;h(e.title,e.description,e.dueDate,e.priority,n)})),r.container.appendChild(r.titlePara),r.container.appendChild(r.titleInput),r.container.appendChild(r.descrPara),r.container.appendChild(r.descrInput),r.container.appendChild(r.duePara),r.container.appendChild(r.dueInput),r.container.appendChild(r.priorityPara),r.container.appendChild(r.highP),r.container.appendChild(r.medP),r.container.appendChild(r.lowP),r.container.appendChild(r.create),r.container.appendChild(r.cancel),i.center.appendChild(r.container),r.highP.addEventListener("click",(()=>{u(),event.target.checked=!0,l="High Priority",console.log(l)})),r.medP.addEventListener("click",(()=>{u(),event.target.checked=!0,l="Normal Priority",console.log(l)})),r.lowP.addEventListener("click",(()=>{u(),event.target.checked=!0,l="Low Priority",console.log(l)})),r.create.addEventListener("click",p),r.cancel.addEventListener("click",s)})),a.today.addEventListener("click",(()=>{i.center.innerHTML="",c.forEach(((e,t)=>{const n=t;(e=>{const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()})(new Date(e.dueDate))&&h(e.title,e.description,e.dueDate,e.priority,n)}))}))})();