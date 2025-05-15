import { db } from './firebase';
import {
  collection,
  doc,
  setDoc,
  getDocs

} from 'firebase/firestore';
import { UnitData } from './components/UnitBlock';

export async function saveUnit(buildingName: string, unit: UnitData) {
  const unitRef = doc(db, 'buildings', buildingName, 'units', unit.id);
  await setDoc(unitRef, unit);
}

export async function getAllUnits(buildingName: string): Promise<UnitData[]> {
  const colRef = collection(db, 'buildings', buildingName, 'units');
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => doc.data() as UnitData);
}
